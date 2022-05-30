import { useRouter } from 'next/router'
import Notfound from 'pages/404'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import useSWR from 'swr'
import Header from '~/components/header/Header'
import { Loading } from '~/components/loading/Loading'
import { fetcher } from '~/services/fetcher'
import request from '~/utils/request'
import moment from 'moment'
import { ReviewsType, MovieType } from '../../src/type/type'
import apiConfig from 'pages/api/apiConfig'

const Reviews = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: dataMovieReview, error: errorMovieReview } = useSWR(id ? request.fetchMovieReviews(id) : null, fetcher)
  const { data: dataMovieDetail, error: errorDetail } = useSWR(id ? request.fetchMovieDetail(id) : null, fetcher)

  if (errorMovieReview || errorDetail) return <div>failed to load</div>
  if (!dataMovieReview || !dataMovieDetail) return <Loading>Loading...</Loading>
  if (dataMovieReview.status_message || dataMovieDetail.status_message) return <Notfound />
  const movieReview: ReviewsType[] = dataMovieReview.results
  const movieDetail: MovieType = dataMovieReview

  return (
    <div className="overflow-hidden text-[80%] sm:text-[100%]">
      <Header />
      <div className="bg-white5">
        <div className="mx-auto sm:container ">
          <div className="min-h-screen bg-white px-8 py-20">
            <div className="flex">
              <div className="mr-2">
                <img
                  src={apiConfig.originalImage(movieDetail.backdrop_path)}
                  alt={movieDetail.title}
                  className="w-[100px]"
                />
              </div>
              <div>
                <p>
                  <span className="text-blue1">{movieDetail.title}</span>
                  <span className="text-14 opacity-70">{`(${moment(movieDetail.release_date).format(
                    'MMM Do YY'
                  )})`}</span>
                </p>
                <p className="text-blue1">{movieReview.length} Reviews</p>
              </div>
            </div>
            <div className="my-10">
              {movieReview.map((review) => (
                <div className="my-4 bg-white6 p-4" key={review.id}>
                  <div className="mb-2 flex">
                    <div className="mr-2">
                      <img
                        src={
                          review.author_details.avatar_path.includes('https')
                            ? review.author_details.avatar_path
                            : apiConfig.originalImage(review.author_details.avatar_path)
                        }
                        alt={review.author_details.name}
                        className="w-[100px]"
                      />
                    </div>
                    <div>
                      <p className="flex items-center text-14">
                        <FaStar className="mr-2 inline-block text-yellow-400" />
                        <span className="text-16">{review.author_details.rating}</span>/10
                      </p>
                      <p className="my-2 flex gap-2 text-12">
                        <span className="text-blue1">{review.author_details.name}</span>
                        <span>{moment(review.created_at).format('MMM Do YY')}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-14">{review.content}</p>
                  {/* {console.log(review.author_details.avatar_path)} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
