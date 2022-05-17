import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { SvgAdd } from './SvgAdd'
import { Play } from './Play'
import { MovieType } from '../type/type'
import request from '../utils/request'
import { fetcher } from '../fetcher/fetcher'
import useSWR from 'swr'
import apiConfig from '../../pages/api/apiConfig'

const Carosel: React.FC<{ movieTrending: MovieType[] }> = ({
  movieTrending,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const { data, error } = useSWR(request.fetchTrending, fetcher, {
    fallbackData: movieTrending,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className=" relative  my-4">
      <div className="group w-8/12 hover:cursor-pointer">
        <Slider {...settings}>
          {data.results.map((movie: MovieType) => (
            <div className="relative">
              <img
                src={apiConfig.orinalImage(movie.backdrop_path)}
                alt={movie.title}
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="relative flex flex-row items-end space-x-4">
                  <div className="basis-3/12 px-6">
                    <img
                      src={apiConfig.orinalImage(movie.poster_path)}
                      alt={movie.original_title}
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
                        <p className="text-36">{movie.title}</p>
                        <p className="hiddenText text-20 opacity-70">
                          {movie.overview}
                        </p>
                      </div>
                      <p className="text-20 opacity-70">2.51</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute top-0 right-[-1%] w-4/12">
        <h2 className="text-yellow-400">Up next</h2>
        <div className="py-6">
          <div className="flex flex-col gap-3">
            {data.results.slice(0, 3).map((movie: MovieType) => (
              <div className="flex flex-row">
                <div className="basis-3/12 px-3">
                  <img
                    src={apiConfig.orinalImage(movie.poster_path)}
                    alt={movie.title}
                  />
                </div>
                <div className="basis-9/12 px-4">
                  <div className="group flex flex-col space-y-2 hover:cursor-pointer">
                    <div className="flex items-end space-x-2 ">
                      <Play width="32" height="32" />
                      <p className="opacity-70">2:15</p>
                    </div>
                    <div>
                      <p>{movie.title}</p>
                      <p className="hiddenText text-14 opacity-70">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/trailler" passHref>
            <a className="flex items-center space-x-2 pl-3 pt-4 text-20 font-medium hover:text-yellow-400">
              <span>Browse trailers</span> <FaAngleRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Carosel
