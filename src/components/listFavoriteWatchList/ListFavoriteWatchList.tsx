import moment from 'moment'
import Link from 'next/link'
import apiConfig from 'pages/api/apiConfig'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import MovieServices from '~/services/MovieServices'
import { AccountType, MovieType } from '~/type/type'

const ListFavoriteWatchList: React.FC<{
  movieWatchList: MovieType[]
  isRating?: boolean
  isRemoved?: boolean
  account: AccountType
  mutate: Function
}> = ({ movieWatchList, isRating, account, isRemoved, mutate }) => {
  const handleRemoveRating = async (movie: MovieType) => {
    try {
      mutate(async () => await MovieServices.deleteRateMovie(movie.id, account.session_id), {
        optimisticData: movieWatchList.filter((rate) => rate.id !== movie.id),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="my-6 text-[80%] sm:text-[100%]">
      {movieWatchList?.map((movie: MovieType) => (
        <div className="mb-4 flex py-4 shadow-lg" key={movie.id}>
          <div className="group relative basis-4/12 sm:basis-1/12">
            <Link href={`/movie/${movie.id}`}>
              <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
            </Link>
            <img src={apiConfig.orinalImage(movie.poster_path)} alt={movie.title} />
          </div>
          <div className="basis-8/12 px-6 sm:basis-11/12">
            <p className="font-medium">{movie.title}</p>
            <p className="opacity-50">{moment(movie.release_date).format('MMM Do YY')}</p>
            <p className="hiddenTextLine my-4">{movie.overview}</p>
            <div className="flex items-center gap-6">
              {isRating && (
                <p>
                  <span className="rounded-full bg-yellow-400 p-2">{movie.rating}</span>
                  <span> Your rating</span>
                </p>
              )}
              {isRemoved && (
                <p className="flex items-center">
                  <FaTrash
                    className="mr-1 cursor-pointer text-20 hover:text-red-600"
                    onClick={() => handleRemoveRating(movie)}
                  />
                  <span> Remove</span>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListFavoriteWatchList
