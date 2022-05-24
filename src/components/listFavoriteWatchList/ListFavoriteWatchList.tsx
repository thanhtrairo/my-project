import moment from 'moment'
import Link from 'next/link'
import apiConfig from 'pages/api/apiConfig'
import React from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import { mutate } from 'swr'
import MovieServices from '~/services/MovieServices'
import { AccountType, MovieType } from '~/type/type'
import request from '~/utils/request'

const ListFavoriteWatchList: React.FC<{
  movieWatchList: MovieType[]
  isfavorite?: boolean
  isRating?: boolean
  isRemoved?: boolean
  account: AccountType
}> = ({ movieWatchList, isfavorite, isRating, account, isRemoved }) => {
  const handleRemoveRating = async (movie: MovieType) => {
    try {
      await MovieServices.deleteRateMovie(movie.id, account.session_id)
      mutate(request.fetchRatingList(account.accountId, account.session_id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddFavoriteList = async (movie: MovieType) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await MovieServices.postAddFavoriteList(
        account.accountId,
        account.session_id,
        { media_type: 'movie', media_id: String(movie.id), favorite: true },
        config
      )
      mutate(request.fetchFavoriteList(account.accountId, account.session_id))
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
                  <FaHeart
                    className="mr-1 cursor-pointer text-20 hover:text-pink-400"
                    onClick={() => handleAddFavoriteList(movie)}
                  />
                  <span>Favorite</span>
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
