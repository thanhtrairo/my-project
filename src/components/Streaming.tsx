import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './watch/WatchComponent'
import { MovieType } from '../type/type'
import useHookSWR from '../swr/customSWR'
import request from '../utils/request'

export const Streaming: React.FC<{ movieStreamming: MovieType[] }> = ({
  movieStreamming,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  const { data, error } = useHookSWR(request.fetchStreamming, movieStreamming)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Title>Explore what’s streaming</Title>
      <TitleCategories title="included with Prime">PRIME VIDEO</TitleCategories>
      <div className="mb-16 mt-8">
        <Slider {...settings}>
          {data.results.map((movie: MovieType) => (
            <WatchComponent movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}
