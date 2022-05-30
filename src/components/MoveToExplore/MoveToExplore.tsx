import React from 'react'
import { BornToday } from './BornToday'
import { TopNext } from './TopNext'
import { PersonType } from '../../type/type'
import { Video } from '../Video'

export const MoveToExplore: React.FC<{ personPopular: PersonType[] }> = ({ personPopular }) => {
  return (
    <>
      <Video title="More to explore" titleCategories="Editor's picks" titleMovie="list" list name slidesShow={3} />
      <BornToday personPopular={personPopular} />
      <TopNext />
    </>
  )
}
