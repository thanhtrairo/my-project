import React from 'react'
import { BuyMovie } from '../BuyMovie'
import { Title } from '../title/Title'
import { TitleCategories } from '../title/TitleCategories'
import { CommingSoon } from './CommingSoon'

export const ExportsMovie = () => {
  return (
    <>
      <Title>Explore Movies & TV shows</Title>
      <TitleCategories title="Weekend of May 6-8">
        Top box office (US)
      </TitleCategories>
      <div className="mt-6 mb-16 grid grid-cols-2 gap-x-16 gap-y-6">
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
      </div>
      <CommingSoon />
    </>
  )
}
