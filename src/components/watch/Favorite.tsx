import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './WatchComponent'
import request from '../../utils/request'
import { MovieType } from '../../type/type'
import { fetcher } from '../../fetcher/fetcher'
import useSWR from 'swr'

const Favorite: React.FC<{ moviePopular: MovieType[] }> = ({ moviePopular }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  const { data, error } = useSWR(request.fetchPopular, fetcher, { fallbackData: moviePopular })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <TitleCategories title="This week's top TV and movies">Fan favorites</TitleCategories>
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

export default Favorite
