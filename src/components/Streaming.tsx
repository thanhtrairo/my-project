import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './watch/WatchComponent'

export const Streaming = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  return (
    <>
      <Title>Explore what’s streaming</Title>
      <TitleCategories title="included with Prime">PRIME VIDEO</TitleCategories>
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
