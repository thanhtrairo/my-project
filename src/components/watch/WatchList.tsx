import Link from 'next/link'
import React from 'react'
import { SvgAdd } from '../SvgAdd'
import { TitleCategories } from '../title/TitleCategories'

export const WatchList = () => {
  return (
    <div className="mb-10">
      <TitleCategories title="">From your Watchlist</TitleCategories>
      <div className=" p-6 text-center">
        <div className="flex flex-row justify-center">
          <SvgAdd width="30" height="36" />
        </div>
        <div className="my-6">
          <p className="font-medium">Sign in to access your Watchlist</p>
          <p>Save shows and movies to keep track of what you want to watch.</p>
        </div>
        <div>
          <Link href="/login">
            <button className="rounded-md bg-yellow-400 px-6 py-1 font-medium text-black hover:bg-yellow-500">
              Sign in to IMDb
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
