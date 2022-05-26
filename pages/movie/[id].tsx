// import axios from 'axios'
import React, { useState } from 'react'

import { FaAngleDown, FaAngleUp, FaCheck, FaRegStar, FaStar } from 'react-icons/fa'
import Header from '../../src/components/header/Header'
import { Play } from '../../src/components/Play'
import { SvgAdd } from '../../src/components/SvgAdd'
import { TitleCategories } from '../../src/components/title/TitleCategories'
import { CastType, VideoTraillerType } from '../../src/type/type'
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
import Link from 'next/link'
import clsx from 'clsx'

export default function MovieDetail() {
  const [showRate, setShowRate] = useState<boolean>(false)
  const [showPupop, setShowPupop] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(false)
  const [addWatchList, setAddWatchList] = useState<boolean>(false)
  const [addFavoriteList, setAddFavoriteList] = useState<boolean>(false)
  const [videoId, setVideoId] = useState<string>('')
  const [showTrailers, setShowTrailers] = useState<boolean>(false)

  const account = useSelector((state: RootState) => state.account)

  const handleShowVideo = (key: string, autoPlay: boolean) => {
    setShowPupop(!showPupop)
    setVideoId(key)
    setAutoPlay(autoPlay)
  }
  const router = useRouter()
  const { id } = router.query

  const { data: movieDetail, error: errorDetail } = useSWR(id ? request.fetchMovieDetail(id) : null, fetcher)
  const { data: movieDetailTrailer, error: errorDetailTrailer } = useSWR(
    id ? request.fetchMovieDetailTrailler(id) : null,
    fetcher
  )
  const { data: cast, error: errorCast } = useSWR(id ? request.fetchCasts(id) : null, fetcher)

  if (errorDetail || errorDetailTrailer || errorCast) return <div>failed to load</div>
  if (!movieDetail || !movieDetailTrailer || !cast) return <div>loading...</div>

  const handleAddWatchList = async () => {
    if (account.session_id) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        await MovieServices.postAddMovieWatchList(
          account.accountId,
          account.session_id,
          { media_type: 'movie', media_id: String(movieDetail.id), watchlist: true },
          config
        )
        setAddWatchList(!addWatchList)
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
        await MovieServices.postAddFavoriteList(
          account.accountId,
          account.session_id,
          { media_type: 'movie', media_id: String(movieDetail.id), favorite: true },
          config
        )
        setAddFavoriteList(!addFavoriteList)
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

  return (
    <div className="overflow-hidden text-[80%] sm:text-[100%]">
      {showPupop && <Popup onShow={() => setShowPupop(false)} videoId={videoId} autoPlay={autoPlay} />}
      {showRate && <Rate onShow={() => setShowRate(false)} movieId={movieDetail.id} />}
      {(showPupop || showRate) && (
        <div
          className="fixed top-0 left-0 z-20 h-screen w-full bg-blackOver group-hover:block"
          onClick={() => {
            setShowRate(false)
            setShowPupop(false)
          }}
        ></div>
      )}
      <Header />
      <div className="overflow-hidden bg-gray px-2 text-white">
        <div className="mx-auto sm:container ">
          <div className="my-10 flex items-center justify-between">
            <h1 className="text-20 sm:text-36">{movieDetail.title}</h1>
            <div className="flex space-x-10">
              <div className="items-center sm:flex-col">
                <p className="text-12 font-medium tracking-widest opacity-70 sm:text-14">IMDb RATING</p>
                <div className="flex items-center space-x-2">
                  <FaStar className="fill-yellow-400 text-24 sm:text-32" />
                  <div>
                    <p className="sm:text-20">
                      {movieDetail.vote_average}
                      <span className="opacity-70 sm:text-14">/10</span>
                    </p>
                    <p className="opacity-70 sm:text-14">{Math.floor(movieDetail.vote_count * 0.01)}k</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-12 font-medium tracking-widest opacity-70 sm:text-14 ">YOUR RATING</p>
                <div className="flex cursor-pointer space-x-2" onClick={() => handleShowRate()}>
                  <FaRegStar className="fill-blue1 text-24 sm:text-32" />
                  <p className="sm:text-20">Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:basis-9/12">
              <div
                className="group hover:cursor-pointer"
                onClick={() => handleShowVideo(movieDetailTrailer.results[0]?.key, true)}
              >
                <div className="relative">
                  <img src={apiConfig.orinalImage(movieDetail.backdrop_path)} alt={movieDetail.title} />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="relative flex flex-row items-end space-x-4">
                      <div className="hidden px-6 sm:block sm:basis-3/12">
                        <img src={apiConfig.orinalImage(movieDetail.poster_path)} alt={movieDetail.original_title} />
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
                            <p className="text-20 sm:text-36">{movieDetail.title}</p>
                            <p className="hiddenText opacity-70 sm:text-20">{movieDetail.overview}</p>
                          </div>
                          <p className="opacity-70 sm:text-20">2.51</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:basis-3/12">
              <button onClick={() => setShowTrailers(!showTrailers)} className="my-2 text-blue1 sm:hidden">
                More trailers{' '}
                {showTrailers ? <FaAngleDown className="inline-block" /> : <FaAngleUp className="inline-block" />}
              </button>
              <div className={clsx('hidden flex-col gap-3 sm:flex', { ['flexImportant']: showTrailers })}>
                {movieDetailTrailer.results.slice(1, 5).map((movie: VideoTraillerType) => (
                  <div className="flex flex-row" key={movie.id}>
                    <div className="basis-4/12 sm:px-3">
                      <img src={apiConfig.orinalImage(movieDetail.poster_path)} alt={movieDetail.title} />
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
          <div className="my-6 flex flex-wrap">
            <div className="w-full sm:basis-8/12">
              <p className="borderBottomWhite">{movieDetail.overview}</p>
              <p className="borderBottomWhite">
                <span>Movie name: </span>
                <span className="ml-2 text-blue1">{movieDetail.title}</span>
              </p>
              <p className="borderBottomWhite">
                <span>Release date: </span>
                <span className="ml-2 text-blue1">{moment(movieDetail.release_date).format('MMM Do YY')}</span>
              </p>
            </div>
            <div className="sm:basis-4/12 sm:px-4">
              <p
                className="cursor-pointer bg-gray2 py-2 px-6 font-medium hover:bg-white4"
                onClick={() => handleAddWatchList()}
              >
                <span className="text-24">
                  {addWatchList ? <FaCheck className="mx-auto inline-block text-16" /> : '+'}
                </span>
                <span className="ml-2">Add to WatchList</span>
              </p>
              <p
                className="mt-2 cursor-pointer bg-gray2 py-2 px-6 font-medium hover:bg-white4"
                onClick={() => handleAddFavoriteList()}
              >
                <span className="text-24">
                  {addFavoriteList ? <FaCheck className="mx-auto inline-block text-16" /> : '+'}
                </span>
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
        <div className="mx-auto px-4 sm:container">
          <div>
            <TitleCategories title="" textColor>
              Top casts
            </TitleCategories>
            <div className="my-6">
              <div className="grid grid-cols-2 gap-y-4">
                {cast.cast.slice(0, 11).map((cast: CastType) => (
                  <div key={cast.id} className="flex space-x-4">
                    <div className="basis-2/12">
                      <div className="group relative h-[80px] w-[80px] overflow-hidden rounded-full sm:h-[200px] sm:w-[200px]">
                        <Link href={`/person/${cast.id}`}>
                          <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
                        </Link>
                        <img src={apiConfig.orinalImage(cast.profile_path)} alt={cast.name} className="w-full" />
                      </div>
                    </div>
                    <div className="basis-10/12">
                      <p className="font-medium">{cast.name}</p>
                      <p className="font-thin">as {cast.original_name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const res = await axios.get(request.fetchPopular)

//   const paths = res.data.results.map((movie: MovieType) => {
//     return {
//       params: { id: String(movie.id) },
//     }
//   })
//   return {
//     paths,
//     fallback: true,
//   }
// }
// export const getStaticProps = async ({ params }: { params: { id: string } }) => {
//   try {
//     const result = await Promise.all([
//       MovieServices.getMovieDetails(params.id),
//       MovieServices.getMovieVideos(params.id),
//       MovieServices.getMovieCasts(params.id),
//     ])
//     return {
//       props: {
//         movieDetail: result[0].data,
//         movieDetailTrailler: result[1].data,
//         casts: result[2].data,
//       },
//     }
//   } catch (e) {
//     return {
//       props: {
//         movieDetail: {},
//         movieDetailTrailler: {},
//         casts: {},
//       },
//       notFound: true,
//     }
//   }
// }
