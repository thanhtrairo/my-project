import React from 'react'
import { Title } from './title/Title'
import { TitleCategories } from './title/TitleCategories'
import Slider from 'react-slick'
import { Movie } from './Movie'
import clsx from 'clsx'

export const Video = ({
  title,
  titleCategories,
  titleCategoriesPlaceholder,
  titleMovie,
  list,
  name,
  price,
  slidesShow,
  features,
}: {
  title?: string
  titleCategories?: string
  titleCategoriesPlaceholder?: string
  titleMovie: string
  list?: boolean
  name?: boolean
  price?: boolean
  slidesShow: number
  features?: boolean
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesShow,
    slidesToScroll: slidesShow,
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
      <Title>{title}</Title>
      {!features && <TitleCategories title={titleCategoriesPlaceholder}>{titleCategories}</TitleCategories>}
      <div className={clsx('mt-6 mb-16', { ['sm:w-8/12']: features })}>
        <Slider {...settings}>
          <Movie title={titleMovie} list={list} name={name} price={price}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title={titleMovie} list={list} name={name} price={price}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title={titleMovie} list={list} name={name} price={price}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title={titleMovie} list={list} name={name} price={price}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
        </Slider>
      </div>
    </>
  )
}
