import React, { useState } from 'react'
import Header from '../../src/components/header/Header'
import { SvgAdd } from '../../src/components/SvgAdd'
import { MovieType } from '../../src/type/type'
import { useRouter } from 'next/router'
import apiConfig from '../api/apiConfig'
import moment from 'moment'
import Link from 'next/link'
import { fetcher } from '~/services/fetcher'
import useSWR from 'swr'
import request from '~/utils/request'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Notfound from 'pages/404'
import { Loading } from '~/components/loading/Loading'
import clsx from 'clsx'

const PersonDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [showStory, setShowStory] = useState<boolean>(false)

  const { data: personDetail, error: personDetailError } = useSWR(id ? request.fetchPersonDetail(id) : null, fetcher)

  const { data: personDetailMovie, error: personDetailMovieError } = useSWR(
    id ? request.fetchPersonDetailMovie(id) : null,
    fetcher
  )

  if (personDetailError || personDetailMovieError) return <div>failed to load</div>
  if (!personDetail || !personDetailMovie) return <Loading>Loading...</Loading>
  if (personDetail.status_message || personDetail.status_message) return <Notfound />

  return (
    <div className="overflow-hidden text-[80%] sm:text-[100%]">
      <Header />
      <div className="bg-white5">
        <div className="mx-auto sm:container ">
          <div className="bg-white px-8 py-20">
            <div className="border-[1px] border-solid border-gray5 py-4 px-4 sm:px-0">
              <p className="text-36">{personDetail.name}</p>
              <div className="flex flex-wrap">
                <div className="basis-6/12 sm:basis-4/12">
                  <div className="">
                    <img src={apiConfig.orinalImage(personDetail.profile_path)} alt={personDetail.name} />
                  </div>
                </div>
                <div className="w-full sm:basis-8/12 sm:px-6">
                  <p className={clsx({ ['hiddenTextLine']: !showStory })}>{personDetail.biography}</p>
                  <button onClick={() => setShowStory(!showStory)} className="text-blue1">
                    More story{' '}
                    {!showStory ? <FaAngleDown className="inline-block" /> : <FaAngleUp className="inline-block" />}
                  </button>
                  <p className="mt-4 flex gap-2">
                    <span className="font-medium">Born</span>
                    <span className="text-blue1">{moment(personDetail.birthday).format('MMM Do YY')}</span>
                    <span>in</span>
                    <span className="text-blue1">{personDetail.place_of_birth}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 border-[1px] border-solid border-gray5 p-4 sm:px-0">
              <p className="text-32 text-yellow1">Known For</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-10">
                {personDetailMovie.cast.map((movie: MovieType) => (
                  <div className="" key={movie.id}>
                    <div className="group relative h-[260px] w-full overflow-hidden sm:h-[300px]">
                      <Link href={`/movie/${movie.id}`}>
                        <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
                      </Link>
                      <img src={apiConfig.orinalImage(movie.poster_path)} alt={movie.title} className="h-full w-full" />
                      <div className="absolute top-0 left-0">
                        <SvgAdd width="36" height="50" />
                      </div>
                    </div>
                    <div className="text-center text-14 sm:px-3">
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
    </div>
  )
}

export default PersonDetail
