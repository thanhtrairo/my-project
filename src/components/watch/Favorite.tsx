import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './WatchComponent'

export const Favorite = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  return (
    <>
      <TitleCategories title="This week's top TV and movies">
        Fan favorites
      </TitleCategories>
      <div className="mb-16 mt-8">
        <Slider {...settings}>
          <WatchComponent />
          <WatchComponent />
          <WatchComponent />
          <WatchComponent />
          <WatchComponent />
          <WatchComponent />
          <WatchComponent />
        </Slider>
      </div>
    </>
  )
}
