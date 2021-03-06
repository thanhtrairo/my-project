import axios from 'axios'
import React, { useState } from 'react'

import { FaRegStar, FaStar } from 'react-icons/fa'
import Header from '../../src/components/header/Header'
import { Play } from '../../src/components/Play'
import { SvgAdd } from '../../src/components/SvgAdd'
import { TitleCategories } from '../../src/components/title/TitleCategories'
import { CastType, MovieType, VideoTraillerType } from '../../src/type/type'
import request from '../../src/utils/request'
import apiConfig from '../api/apiConfig'
import { Popup } from '../../src/components/Modal/Popup'
import moment from 'moment'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { fetcher } from '../../src/services/fetcher'
import { Rate } from '../../src/components/Modal/Rate'
import MovieServices from '~/services/MovieServices'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'

const MovieDetail: React.FC<{
  movieDetail: MovieType
  movieDetailTrailler: VideoTraillerType[]
  casts: CastType[]
}> = ({ movieDetail, movieDetailTrailler, casts }) => {
  const [showRate, setShowRate] = useState<boolean>(false)
  const [showPupop, setShowPupop] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(false)
  const [videoId, setVideoId] = useState<string>('')

  const account = useSelector((state: RootState) => state.account)

  const handleShowVideo = (key: string, autoPlay: boolean) => {
    setShowPupop(!showPupop)
    setVideoId(key)
    setAutoPlay(autoPlay)
  }

  const handleAddWatchList = async () => {
    if (account.session_id) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        const resAccount = await MovieServices.getAccount(account.session_id)

        await MovieServices.postAddMovieWatchList(
          resAccount.data.id,
          account.session_id,
          { media_type: 'movie', media_id: String(movieDetail.id), watchlist: true },
          config
        )
      } catch (error) {
        console.log(error)
      }
    } else {
      router.push(`/login?movie/${movieDetail.id}`)
    }
  }

  const handleAddFavoriteList = async () => {
    if (account.session_id) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        const resAccount = await MovieServices.getAccount(account.session_id)

        await MovieServices.postAddFavoriteList(
          resAccount.data.id,
          account.session_id,
          { media_type: 'movie', media_id: String(movieDetail.id), favorite: true },
          config
        )
      } catch (error) {
        console.log(error)
      }
    } else {
      router.push(`/login?movie/${movieDetail.id}`)
    }
  }

  const handleShowRate = () => {
    setShowRate(!showRate)
  }

  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>loading...</div>
  }

  const { data: movieDetailSwr, error: errorDetail } = useSWR(request.fetchMovieDetail(id), fetcher, {
    fallbackData: movieDetail,
  })
  const { data: movieDetailTrailerSwr, error: errorDetailTrailer } = useSWR(
    request.fetchMovieDetailTrailler(id),
    fetcher,
    {
      fallbackData: movieDetailTrailler,
    }
  )
  const { data: castSwr, error: errorCast } = useSWR(request.fetchCasts(id), fetcher, {
    fallbackData: casts,
  })

  if (errorDetail || errorDetailTrailer || errorCast) return <div>failed to load</div>
  if (!movieDetailSwr) return <div>loading...</div>

  return (
    <>
      {showPupop && <Popup onShow={() => setShowPupop(!showPupop)} videoId={videoId} autoPlay={autoPlay} />}
      {showRate && <Rate onShow={() => setShowRate(!showRate)} movieId={movieDetail.id} />}
      {(showPupop || showRate) && (
        <div className="fixed top-0 left-0 z-20 h-screen w-full bg-blackOver group-hover:block"></div>
      )}
      <Header />
      <div className="overflow-hidden bg-gray text-white ">
        <div className="container mx-auto ">
          <div className="my-10 flex items-center justify-between">
            <h1 className="text-36">{movieDetailSwr.title}</h1>
            <div className="flex space-x-10">
              <div className="flex-col items-center">
                <p className="text-14 font-medium tracking-widest opacity-70">IMDb RATING</p>
                <div className="flex items-center space-x-2">
                  <FaStar className="fill-yellow-400 text-32" />
                  <div>
                    <p className="text-20">
                      {movieDetailSwr.vote_average}
                      <span className="text-14 opacity-70">/10</span>
                    </p>
                    <p className="text-14 opacity-70">{Math.floor(movieDetailSwr.vote_count * 0.01)}k</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-14 font-medium tracking-widest opacity-70 ">YOUR RATING</p>
                <div className="flex cursor-pointer space-x-2" onClick={() => handleShowRate()}>
                  <FaRegStar className="fill-blue1 text-32" />
                  <p className="text-20">Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="basis-9/12">
              <div
                className="group hover:cursor-pointer"
                onClick={() => handleShowVideo(movieDetailTrailerSwr.results[0]?.key, true)}
              >
                <div className="relative">
                  <img src={apiConfig.orinalImage(movieDetailSwr.backdrop_path)} alt={movieDetailSwr.title} />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="relative flex flex-row items-end space-x-4">
                      <div className="basis-3/12 px-6">
                        <img
                          src={apiConfig.orinalImage(movieDetailSwr.poster_path)}
                          alt={movieDetailSwr.original_title}
                        />
                        <div className="absolute top-0 left-6">
                          <SvgAdd width="36" height="50" />
                        </div>
                      </div>
                      <div className="basis-8/12">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Play width="70" height="70" />
                          </div>
                          <div className="">
                            <p className="text-36">{movieDetailSwr.title}</p>
                            <p className="hiddenText text-20 opacity-70">{movieDetailSwr.overview}</p>
                          </div>
                          <p className="text-20 opacity-70">2.51</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-3/12">
              <div className="flex flex-col gap-3">
                {movieDetailTrailerSwr.results.slice(1, 5).map((movie: VideoTraillerType) => (
                  <div className="flex flex-row" key={movie.id}>
                    <div className="basis-4/12 px-3">
                      <img src={apiConfig.orinalImage(movieDetailSwr.poster_path)} alt={movieDetailSwr.title} />
                    </div>
                    <div className="basis-8/12 px-4">
                      <div
                        className="group flex flex-col space-y-2 hover:cursor-pointer"
                        onClick={() => handleShowVideo(movie.key, false)}
                      >
                        <div className="flex items-end space-x-2 ">
                          <Play width="32" height="32" />
                          <p className="opacity-70">2:15</p>
                        </div>
                        <div>
                          <p>{movie.type}</p>
                          <p className="hiddenText text-14 opacity-70">{movie.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-6 flex">
            <div className="basis-8/12">
              <p className="borderBottomWhite">{movieDetailSwr.overview}</p>
              <p className="borderBottomWhite">
                <span>Movie name: </span>
                <span className="ml-2 text-blue1">{movieDetailSwr.title}</span>
              </p>
              <p className="borderBottomWhite">
                <span>Release date: </span>
                <span className="ml-2 text-blue1">{moment(movieDetailSwr.release_date).format('MMM Do YY')}</span>
              </p>
            </div>
            <div className="basis-4/12 px-4">
              <p
                className="cursor-pointer bg-gray2 py-2 px-6 font-medium hover:bg-white4"
                onClick={() => handleAddWatchList()}
              >
                <span className="text-24">+</span>
                <span className="ml-2">Add to WatchList</span>
              </p>
              <p
                className="mt-2 cursor-pointer bg-gray2 py-2 px-6 font-medium hover:bg-white4"
                onClick={() => handleAddFavoriteList()}
              >
                <span className="text-24">+</span>
                <span className="ml-2">Add to Favorite</span>
              </p>
              <p className="mt-6 text-blue1">
                <span>470 user reviews</span>
                <span className="ml-6">31 Critic reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-white text-black">
        <div className="container mx-auto">
          <div>
            <TitleCategories title="" textColor>
              Top casts
            </TitleCategories>
            <div className="my-6">
              <div className="grid grid-cols-2 gap-y-4">
                {castSwr.cast.slice(0, 11).map((cast: CastType) => (
                  <div key={cast.id} className="flex space-x-4">
                    <div className="basis-2/12">
                      <img
                        src={apiConfig.orinalImage(cast.profile_path)}
                        alt={cast.name}
                        className="w-full rounded-full"
                      />
                    </div>
                    <div className="basis-10/12">
                      <p className="font-medium">{cast.name}</p>
                      <p className="font-thin">as {cast.original_name}</p>
                      <p className="">{cast.popularity}</p>
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

export const getStaticPaths = async () => {
  const res = await axios.get(request.fetchPopular)

  const paths = res.data.results.map((movie: MovieType) => {
    return {
      params: { id: String(movie.id) },
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
      MovieServices.getMovieDetails(params.id),
      MovieServices.getMovieVideos(params.id),
      MovieServices.getMovieCasts(params.id),
    ])
    return {
      props: {
        movieDetail: result[0].data,
        movieDetailTrailler: result[1].data,
        casts: result[2].data,
      },
    }
  } catch (e) {
    return {
      props: {
        movieDetail: {},
        movieDetailTrailler: {},
        casts: {},
      },
      notFound: true,
    }
  }
}

export default MovieDetail
