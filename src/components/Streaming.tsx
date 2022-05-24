import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './watch/WatchComponent'
import { MovieType } from '../type/type'

export const Streaming: React.FC<{ movieStreamming: MovieType[] }> = ({ movieStreamming }) => {
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
          {movieStreamming.map((movie: MovieType) => (
            <WatchComponent movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}
