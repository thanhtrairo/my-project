import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { Movie } from '../Movie'

export const CommingSoon = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <TitleCategories title="Trailers for upcoming releases">Coming soon to theaters (US)</TitleCategories>
      <div className="mt-6 mb-16">
        <Slider {...settings}>
          <Movie title="3:45" list={false} price={false} name={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} price={false} name={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} price={false} name={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="3:45" list={false} price={false} name={false}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
        </Slider>
      </div>
    </>
  )
}
