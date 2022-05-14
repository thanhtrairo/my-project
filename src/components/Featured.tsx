import React from 'react'
import { Title } from './title/Title'
import Slider from 'react-slick'
import { Movie } from './Movie'

export const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  }
  return (
    <div className=" mb-20">
      <Title>Featured today</Title>
      <div className="w-8/12">
        <Slider {...settings}>
          <Movie title="List" name price={false} list>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="List" name price={false} list>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="List" name price={false} list>
            What TV Shows Are Renewed or Canceled?
          </Movie>
        </Slider>
      </div>
    </div>
  )
}
