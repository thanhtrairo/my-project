import axios from 'axios'
import React from 'react'
import request from '../../src/utils/request'
import Header from '../../src/components/header/Header'
import { SvgAdd } from '../../src/components/SvgAdd'
import { MovieType, PersonType } from '../../src/type/type'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher } from '../../src/services/fetcher'
import apiConfig from '../api/apiConfig'
import moment from 'moment'
import Link from 'next/link'
import MovieServices from '~/services/MovieServices'

const PersonDetail: React.FC<{ personDetail: PersonType; personDetailMovie: PersonType }> = ({
  personDetail,
  personDetailMovie,
}) => {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>loading...</div>
  }

  const { data: personDetailSwr, error: personDetailError } = useSWR(request.fetchPersonDetail(id), fetcher, {
    fallbackData: personDetail,
  })

  const { data: personDetailMovieSwr, error: personDetailMovieError } = useSWR(
    request.fetchPersonDetailMovie(id),
    fetcher,
    {
      fallbackData: personDetailMovie,
    }
  )
  if (personDetailError || personDetailMovieError) return <div>failed to load</div>
  if (!personDetailSwr) return <div>loading...</div>
  return (
    <>
      <Header />
      <div className="bg-white5">
        <div className="container mx-auto ">
          <div className="bg-white px-8 py-20">
            <div className="border-[1px] border-solid border-gray5 py-4">
              <p className="text-36">{personDetail.name}</p>
              <div className="flex">
                <div className="basis-4/12">
                  <div className="">
                    <img src={apiConfig.orinalImage(personDetail.profile_path)} alt={personDetail.name} />
                  </div>
                </div>
                <div className="basis-8/12 px-6">
                  <p>{personDetail.biography}</p>
                  <p className="mt-4 flex gap-2">
                    <span className="font-medium">Born</span>
                    <span className="text-blue1">{moment(personDetail.birthday).format('MMM Do YY')}</span>
                    <span>in</span>
                    <span className="text-blue1">{personDetail.place_of_birth}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 border-[1px] border-solid border-gray5 py-4">
              <p className="text-32 text-yellow1">Known For</p>
              <div className="grid grid-cols-4 gap-10">
                {personDetailMovieSwr.cast.map((movie: MovieType) => (
                  <div className="" key={movie.id}>
                    <div className="group relative">
                      <Link href={`/movie/${movie.id}`}>
                        <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
                      </Link>
                      <img src={apiConfig.orinalImage(movie.poster_path)} alt={movie.title} />
                      <div className="absolute top-0 left-0">
                        <SvgAdd width="36" height="50" />
                      </div>
                    </div>
                    <div className="text-center text-14">
                      <p className="text-blue1">{movie.title}</p>
                      <div className="text-gray6">
                        <p>{movie.character}</p>
                        <p>{moment(movie.release_date).format('MMM Do YY')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonDetail

export const getStaticPaths = async () => {
  const res = await axios.get(request.fetchPersonPopular)

  const paths = res.data.results.map((person: PersonType) => {
    return {
      params: { id: String(person.id) },
    }
  })
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  try {
    const result = await Promise.all([
      MovieServices.getPersonDetail(params.id),
      MovieServices.getPersonMovies(params.id),
    ])
    return {
      props: {
        personDetail: result[0].data,
        personDetailMovie: result[1].data,
      },
    }
  } catch (e) {
    return {
      props: {
        personDetail: {},
        personDetailMovie: {},
      },
      notFound: true,
    }
  }
}
