import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
// import { MovieSearch } from './MovieSearch'

export const TopNext = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  const { t } = useTranslation()
  return (
    <>
      <TitleCategories title="">{t('header:TopNews')}</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          {/* <MovieSearch />
          <MovieSearch />
          <MovieSearch />
          <MovieSearch /> */}
        </Slider>
        <div className="flex space-x-2">
          <Link href="/" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">{t('header:TopNews')}</a>
          </Link>
          <Link href="/" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">{t('header:TopNews')}</a>
          </Link>
          <Link href="/" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">{t('header:TopNews')}</a>
          </Link>
          <Link href="/" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">{t('header:TopNews')}</a>
          </Link>
        </div>
      </div>
    </>
  )
}
