import React from 'react'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import Link from 'next/link'

export const TopNext = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <>
      <TitleCategories title="">Top news</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          <div className="mx-2">
            <div className="flex space-x-4">
              <div className="group relative">
                <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX90_CR0,0,90,133_.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-1 group-hover:opacity-70 ">
                <p>
                  Box Office: ‘Doctor Strange 2’ Crosses 550 Million Globally
                </p>
                <div className="text-12">
                  <span>May 13</span>
                  <span>Variety Film + TV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <div className="flex space-x-4">
              <div className="group relative">
                <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX90_CR0,0,90,133_.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-1 group-hover:opacity-70 ">
                <p>
                  Box Office: ‘Doctor Strange 2’ Crosses 550 Million Globally
                </p>
                <div className="text-12">
                  <span>May 13</span>
                  <span>Variety Film + TV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <div className="flex space-x-4">
              <div className="group relative">
                <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX90_CR0,0,90,133_.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-1 group-hover:opacity-70 ">
                <p>
                  Box Office: ‘Doctor Strange 2’ Crosses 550 Million Globally
                </p>
                <div className="text-12">
                  <span>May 13</span>
                  <span>Variety Film + TV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <div className="flex space-x-4">
              <div className="group relative">
                <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX90_CR0,0,90,133_.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-1 group-hover:opacity-70 ">
                <p>
                  Box Office: ‘Doctor Strange 2’ Crosses 550 Million Globally
                </p>
                <div className="text-12">
                  <span>May 13</span>
                  <span>Variety Film + TV</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex space-x-2">
          <Link href="" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">
              Top news
            </a>
          </Link>
          <Link href="" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">
              Top news
            </a>
          </Link>
          <Link href="" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">
              Top news
            </a>
          </Link>
          <Link href="" passHref>
            <a className="rounded-2xl border-[1px] border-white py-1 px-3 text-14">
              Top news
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-8 text-24 font-medium">Recently viewed</h2>
        <p>You have no recently viewed pages</p>
      </div>
    </>
  )
}
