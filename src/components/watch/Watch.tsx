import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Title } from '../title/Title'
import Favorite from './Favorite'
import { WatchList } from './WatchList'

export const Watch = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Title>What to watch</Title>
        <h2 className="text flex cursor-pointer flex-row items-center space-x-2 text-blue1">
          Get more recommendations <FaAngleRight />
        </h2>
      </div>
      <div>
        <WatchList />
        <Favorite />
      </div>
    </>
  )
}
