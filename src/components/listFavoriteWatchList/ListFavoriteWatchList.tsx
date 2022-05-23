import moment from 'moment'
import Link from 'next/link'
import apiConfig from 'pages/api/apiConfig'
import React from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import MovieServices from '~/services/MovieServices'
import { MovieType } from '~/type/type'

const ListFavoriteWatchList: React.FC<{
  movieWatchList: MovieType[]
  isfavorite?: boolean
  isRating?: boolean
  sessionId: string
}> = ({ movieWatchList, isfavorite, isRating, sessionId }) => {
  const handleRemoveRating = async (movie: MovieType) => {
    try {
      await MovieServices.deleteRateMovie(movie.id, sessionId)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="my-6">
      {movieWatchList?.map((movie: MovieType) => (
        <div className="mb-4 flex py-4 shadow-lg" key={movie.id}>
          <div className="group relative basis-1/12">
            <Link href={`/movie/${movie.id}`}>
              <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
            </Link>
            <img src={apiConfig.orinalImage(movie.poster_path)} alt={movie.title} />
          </div>
          <div className="basis-11/12 px-6">
            <p className="font-medium">{movie.title}</p>
            <p className="opacity-50">{moment(movie.release_date).format('MMM Do YY')}</p>
            <p className="my-4">{movie.overview}</p>
            <div className="flex items-center gap-6">
              {isRating && (
                <p>
                  <span className="rounded-full bg-yellow-400 p-2">{movie.rating}</span>
                  <span> Your rating</span>
                </p>
              )}

              {isfavorite && (
                <p className="flex items-center">
                  <FaHeart className="mr-1 cursor-pointer text-20 hover:text-pink-400" />
                  <span>Favorite</span>
                </p>
              )}
              <p className="flex items-center">
                <FaTrash
                  className="mr-1 cursor-pointer text-20 hover:text-red-400"
                  onClick={() => handleRemoveRating(movie)}
                />
                <span> Remove</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListFavoriteWatchList
