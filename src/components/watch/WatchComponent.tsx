import Link from 'next/link'
import React from 'react'
import { FaPlay, FaRegStar, FaStar } from 'react-icons/fa'
import apiConfig from '../../../pages/api/apiConfig'
import { MovieType } from '../../type/type'
import { SvgAdd } from '../SvgAdd'

export const WatchComponent: React.FC<{ movie: MovieType }> = ({ movie }) => {
  return (
    <div className="mx-3 bg-gray4">
      <div className="group relative cursor-pointer">
        <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
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
          <FaRegStar className="h-9 w-9 fill-[#5799ef] py-3 hover:bg-white2 hover:fill-white" />
        </div>
        <p className="hiddenText my-2">
          <Link href="" passHref>
            <a className="hiddenText hover:underline">{movie.title}</a>
          </Link>
        </p>
        <div className="hover: my-4 bg-white2">
          <div className=" flex flex-row justify-center space-x-2 py-1 font-medium text-blue1 hover:bg-white3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="ipc-icon ipc-icon--add ipc-button__icon ipc-button__icon--pre"
              id="iconContext-add"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
            </svg>
            <span>Watchlist</span>
          </div>
        </div>
        <div>
          <Link href="" passHref>
            <a className="group flex flex-row items-center justify-center space-x-2 py-1 hover:bg-white2">
              <FaPlay className="opacity-70 group-hover:opacity-100" />
              <span>Trailer</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
