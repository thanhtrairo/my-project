import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './watch/WatchComponent'
import { MovieType } from '../type/type'
import { useRouter } from 'next/router'

export const Streaming: React.FC<{ movieStreamming: MovieType[] }> = ({ movieStreamming }) => {
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
  const router = useRouter()
  return (
    <>
      <Title>Explore what’s streaming</Title>
      <div onClick={() => router.push('/list')} className="cursor-pointer">
        <TitleCategories title="included with Prime">PRIME VIDEO</TitleCategories>
      </div>
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
