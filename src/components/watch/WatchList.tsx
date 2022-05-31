import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AccountType, MovieType } from '~/type/type'
import { SvgAdd } from '../SvgAdd'
import { TitleCategories } from '../title/TitleCategories'
import { WatchListComponent } from './WatchListComponent'

export const WatchList = ({ watchList, ratingList }: { watchList: MovieType[]; ratingList: MovieType[] }) => {
  const [account, setAccount] = useState<AccountType>({ success: false, session_id: '', accountId: '', username: '' })
  useEffect(() => {
    const account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account') || '') : ''
    setAccount(account)
  }, [])
  return (
    <>
      {account.accountId ? (
        watchList.length > 6 ? (
          <WatchListComponent
            movieList={watchList}
            titleCategories="From your WatchList"
            watchList={watchList}
            ratingList={ratingList}
          />
        ) : (
          <div></div>
        )
      ) : (
        <div className="mb-10">
          <TitleCategories title="">From your WatchList</TitleCategories>
          <div className=" p-6 text-center">
            <div className="flex flex-row justify-center">
              <SvgAdd width="30" height="36" />
            </div>
            <div className="my-6">
              <p className="font-medium">Sign in to access your WatchList</p>
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
      )}
    </>
  )
}
