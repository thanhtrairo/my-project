import React from 'react'
import { BuyMovie } from '../BuyMovie'
import { Title } from '../title/Title'
import { TitleCategories } from '../title/TitleCategories'
import { Video } from '../Video'

export const ExportsMovie = () => {
  return (
    <>
      <Title>Explore Movies & TV shows</Title>
      <TitleCategories title="Weekend of May 6-8">Top box office (US)</TitleCategories>
      <div className="mt-6 mb-16 grid gap-x-16 gap-y-6 sm:grid-cols-2">
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
        <BuyMovie num price />
      </div>
      <Video
        titleCategories="Coming soon to theaters (US)"
        titleCategoriesPlaceholder="Trailers for upcoming releases"
        titleMovie="3:45"
        slidesShow={3}
      />
    </>
  )
}
