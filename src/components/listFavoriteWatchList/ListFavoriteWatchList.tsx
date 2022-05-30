import moment from 'moment'
import Link from 'next/link'
import apiConfig from 'pages/api/apiConfig'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { mutate } from 'swr'
import MovieServices from '~/services/MovieServices'
import { AccountType, MovieType } from '~/type/type'
import request from '~/utils/request'

const ListFavoriteWatchList: React.FC<{
  movieWatchList: { results: MovieType[] }
  isRating?: boolean
  account: AccountType
  activeTitle: string
}> = ({ movieWatchList, isRating, account, activeTitle }) => {
  const handleRemove = async (movie: MovieType) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      if (activeTitle === 'WatchList') {
        mutate(
          request.fetchWatchList(account.accountId, account.session_id),
          (watchList: { results: MovieType[] }) => {
            return { results: watchList.results.filter((watch) => watch.id !== movie.id) }
          },
          false
        )
        await MovieServices.postAddMovieWatchList(
          account.accountId,
          account.session_id,
          { media_type: 'movie', media_id: String(movie.id), watchlist: false },
          config
        )
        mutate(request.fetchWatchList(account.accountId, account.session_id))
      } else if (activeTitle === 'Favorite') {
        mutate(
          request.fetchFavoriteList(account.accountId, account.session_id),
          (favoriteList: { results: MovieType[] }) => {
            return { results: favoriteList.results.filter((favorite) => favorite.id !== movie.id) }
          },
          false
        )
        await MovieServices.postAddFavoriteList(
          account.accountId,
          account.session_id,
          { media_type: 'movie', media_id: String(movie.id), favorite: false },
          config
        )
        mutate(request.fetchFavoriteList(account.accountId, account.session_id))
      } else {
        mutate(
          request.fetchRatingList(account.accountId, account.session_id),
          (ratingList: { results: MovieType[] }) => {
            return { results: ratingList.results.filter((rating) => rating.id !== movie.id) }
          },
          false
        )
        await MovieServices.deleteRateMovie(movie.id, account.session_id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="my-6 text-[80%] sm:text-[100%]">
      {movieWatchList?.results?.map((movie: MovieType) => (
        <div className="mb-4 flex py-4 shadow-lg" key={movie.id}>
          <div className="group relative basis-4/12 sm:basis-1/12">
            <Link href={`/movie/${movie.id}`}>
              <div className="absolute top-0 left-0 hidden h-full w-full cursor-pointer bg-blackOver group-hover:block"></div>
            </Link>
            <img src={apiConfig.originalImage(movie.poster_path)} alt={movie.title} />
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
              <p className="flex items-center">
                <FaTrash
                  className="mr-1 cursor-pointer text-20 hover:text-red-600"
                  onClick={() => handleRemove(movie)}
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
