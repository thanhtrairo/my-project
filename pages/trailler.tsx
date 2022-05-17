import clsx from 'clsx'
import moment from 'moment'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'
import Header from '../src/components/header/Header'
import { Play } from '../src/components/Play'
import { SvgAdd } from '../src/components/SvgAdd'
import { Title } from '../src/components/title/Title'
import { fetcher } from '../src/fetcher/fetcher'
import { MovieType, VideoTrailler } from '../src/type/type'
import request from '../src/utils/request'
import apiConfig from './api/apiConfig'

const Trailer: React.FC<{
  videoTrailers: VideoTrailler[]
  moviePopular: MovieType[]
}> = ({ videoTrailers, moviePopular }) => {
  const TRAILLERS = [
    'TRENDING TRAILERS',
    'MOST ANTICIPATED',
    'MOST POPULAR',
    'RECENTLY ADDED',
  ]

  console.log(moviePopular)
  const [active, setActive] = useState<string>('TRENDING TRAILERS')

  const { data, error } = useSWR(request.fetchVideoTrailler, fetcher, {
    fallbackData: videoTrailers,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const getRandomElementMovie = (arrayLength: number) => {
    return Math.floor(Math.random() * arrayLength)
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white ">
        <div className="container mx-auto">
          <Title>Watch New Movie & TV Trailers</Title>
          <nav className="flex">
            {TRAILLERS.map((trailler) => (
              <div
                className={clsx('px-8 py-2', {
                  activeTrailer: active === trailler,
                })}
                onClick={() => setActive(trailler)}
              >
                {trailler}
              </div>
            ))}
          </nav>
          <div className="grid grid-cols-6 gap-4">
            {data.results.map((video: VideoTrailler) => (
              <div key={video.id}>
                <div className="group relative cursor-pointer">
                  <div className="absolute top-0 left-[1%] hidden h-full w-full bg-blackOver group-hover:block"></div>
                  {/* <img
                    src={apiConfig.orinalImage(moviePopular[getRandomElementMovie(moviePopular.length)].poster_path)}
                    alt={video.name}
                    className="w-full"
                  /> */}
                  <div className="absolute top-0 left-0">
                    <SvgAdd width="30" height="36" />
                  </div>
                  <div className="absolute bottom-0 left-[5%]">
                    <Play width="32" height="32" />
                  </div>
                </div>
                <div className="bg-gray p-2">
                  <p className="text-14 opacity-70">{video.name}</p>
                  <p className="hiddenText my-2">
                    <Link href="" passHref>
                      <a className="hiddenText hover:underline">{video.type}</a>
                    </Link>
                  </p>
                  <p className="mt-6 text-14 opacity-70">
                    <i>{moment(video.published_at).format('MMM Do YY')}</i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Trailer
