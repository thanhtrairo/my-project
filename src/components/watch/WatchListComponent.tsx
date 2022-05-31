import React from 'react'
import { Title } from '../title/Title'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { WatchComponent } from './WatchComponent'
import { MovieType } from '../../type/type'
import { useRouter } from 'next/router'
import LazyLoad from 'react-lazyload'
import { Loading } from '../loading/Loading'

export const WatchListComponent: React.FC<{
  movieList: MovieType[]
  title?: string
  titleCategories: string
  titleCategoriesPlaceholder: string
}> = ({ movieList, title, titleCategories, titleCategoriesPlaceholder }) => {
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
      <Title>{title}</Title>
      <div onClick={() => router.push('/list')} className="cursor-pointer">
        <TitleCategories title={titleCategoriesPlaceholder}>{titleCategories}</TitleCategories>
      </div>
      <div className="mb-16 mt-8">
        <Slider {...settings}>
          {movieList.map((movie: MovieType) => (
            <LazyLoad key={movie.id} height={100} offset={[-100, 100]} placeholder={<Loading />}>
              <WatchComponent movie={movie} />
            </LazyLoad>
          ))}
        </Slider>
      </div>
    </>
  )
}
