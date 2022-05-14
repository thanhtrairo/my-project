import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { Movie } from './Movie'

export const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <>
      <Title>Exclusive videos</Title>
      <TitleCategories title="Celebrity interviews, trending entertainment stories, and expert analysis">
        IMDb Originals
      </TitleCategories>
      <div className="mt-6 mb-16">
        <Slider {...settings}>
          <Movie title="3:45" list={false} name={true} price={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} name={true} price={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} name={true} price={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} name={true} price={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
        </Slider>
      </div>
    </>
  )
}
