import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './WatchComponent'
import { MovieType } from '../../type/type'

const Favorite: React.FC<{ moviePopular: MovieType[] }> = ({ moviePopular }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
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
      <TitleCategories title="This week's top TV and movies">Fan favorites</TitleCategories>
      <div className="mb-16 mt-8">
        <Slider {...settings}>
          {moviePopular.map((movie: MovieType) => (
            <WatchComponent movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Favorite
