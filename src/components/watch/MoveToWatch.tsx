import Link from 'next/link'
import React from 'react'
import { TitleCategories } from '../title/TitleCategories'

export const MoveToWatch = () => {
  return (
    <>
      <TitleCategories title="IMDb helps you select the perfect next show or movie to watch.">
        More to watch
      </TitleCategories>
      <div className="mt-6 mb-16 flex flex-row space-x-6">
        <Link href="" passHref>
          <a className="border-2 border-white3 bg-transparent px-20 py-1 text-white3 hover:bg-white2">Watch Guide</a>
        </Link>
        <Link href="" passHref>
          <a className="border-2 border-white3 bg-transparent px-20 py-1 text-white3 hover:bg-white2">Most Popular</a>
        </Link>
      </div>
    </>
  )
}
