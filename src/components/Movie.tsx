import Link from 'next/link'
import React from 'react'
import { FaListUl } from 'react-icons/fa'
import { BuyMovie } from './BuyMovie'
import { Play } from './Play'

export const Movie: React.FC<{
  title: string
  list: boolean
  name: boolean
  price: boolean
}> = ({ children, title, list, name, price }) => {
  return (
    <div className="mx-4 hover:cursor-pointer">
      <div className="group relative mb-3">
        <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BYjg2MWViZGEtOGM0ZS00NjJlLWEzODYtMjM0NmI0YzdiMTk4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,214_.jpg 380w, https://m.media-amazon.com/images/M/MV5BYjg2MWViZGEtOGM0ZS00NjJlLWEzODYtMjM0NmI0YzdiMTk4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX570_CR0,0,570,321_.jpg 570w, https://m.media-amazon.com/images/M/MV5BYjg2MWViZGEtOGM0ZS00NjJlLWEzODYtMjM0NmI0YzdiMTk4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg 760w"
          alt=""
          className="w-full"
        />
        <div className="absolute bottom-0 left-[2%] flex flex-row items-center space-x-2">
          {list ? (
            <FaListUl className="group-hover:text-yellow-400" />
          ) : (
            <Play width="32" height="32" />
          )}

          <p>{title}</p>
        </div>
      </div>
      {name ? (
        <Link href="" passHref>
          <a className="hover:underline">{children}</a>
        </Link>
      ) : price ? (
        <BuyMovie num={false} price />
      ) : (
        <BuyMovie num={false} price={false} />
      )}
    </div>
  )
}
