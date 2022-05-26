import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaCheck, FaPlay, FaRegStar, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '~/redux/modal/modalRateSlice'
import { RootState } from '~/redux/store'
import MovieServices from '~/services/MovieServices'
import apiConfig from '../../../pages/api/apiConfig'
import { MovieType } from '../../type/type'
import { SvgAdd } from '../SvgAdd'

export const WatchComponent: React.FC<{ movie: MovieType }> = ({ movie }) => {
  const dispatch = useDispatch()
  const account = useSelector((state: RootState) => state.account)

  const [addWatchList, setAddWatchList] = useState<boolean>(false)

  const router = useRouter()

  const redirect = router.asPath.split('?')[1]

  const handleShowVideo = async (id: string) => {
    const res = await MovieServices.getMovieVideos(id)
    dispatch(
      setShow({
        rate: {
          showRate: false,
          movieId: '',
        },
        video: {
          showVideo: true,
          videoId: res.data.results[0].key,
        },
      })
    )
  }

  const handleShowRate = () => {
    dispatch(
      setShow({
        rate: {
          showRate: true,
          movieId: movie.id,
        },
        video: {
          showVideo: false,
          videoId: '',
        },
      })
    )
  }

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
          { media_type: 'movie', media_id: String(movie.id), watchlist: true },
          config
        )
        setAddWatchList(!addWatchList)
      } catch (error) {
        console.log(error)
      }
    } else {
      if (redirect) {
        router.push(`/login?movie/${movie.id}`)
      } else {
        router.push('/login')
      }
    }
  }

  return (
    <>
      <div className="mx-3 bg-gray4">
        <div className="group relative cursor-pointer">
          <Link href={`/movie/${movie.id}`} passHref>
            <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
          </Link>
          <img src={apiConfig.orinalImage(movie.poster_path)} alt={movie.title} />

          <div className="absolute top-0 left-0">
            <SvgAdd width="30" height="36" />
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-row items-center space-x-6">
            <div className="flex flex-row items-center">
              <FaStar className="mr-1  h-9 fill-yellow-400 py-3" />
              <p>{movie.vote_average}</p>
            </div>
            <FaRegStar
              className="h-9 w-9 cursor-pointer fill-[#5799ef] py-3 hover:bg-white2 hover:fill-white"
              onClick={() => handleShowRate()}
            />
          </div>
          <p className="hiddenText my-2">
            <Link href={`/movie/${movie.id}`} passHref>
              <a className="hiddenText hover:underline">{movie.title}</a>
            </Link>
          </p>
          <div className="my-4 cursor-pointer bg-white2" onClick={() => handleAddWatchList()}>
            <div className=" flex flex-row items-center justify-center space-x-2 py-1 font-medium text-blue1 hover:bg-white3">
              {addWatchList ? <FaCheck className="inline-block text-16" /> : <span className="">+</span>}
              <span className="">WatchList</span>
            </div>
          </div>
          <div onClick={() => handleShowVideo(movie.id)}>
            <a className="group flex flex-row items-center justify-center space-x-2 py-1 hover:bg-white2">
              <FaPlay className="opacity-70 group-hover:opacity-100" />
              <span className="cursor-pointer">Trailer</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
