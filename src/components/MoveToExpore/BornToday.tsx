import React from 'react'
import Slider from 'react-slick'
import { TitleCategories } from '../title/TitleCategories'

export const BornToday: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }

  return (
    <>
      <TitleCategories title="People born on May 14">Born today</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          {/* {data.cast.map((cast: CastType) => (
            <div className="group" key={cast.id}>
              <div className="relative mx-5 cursor-pointer">
                <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
                <img
                  src={apiConfig.orinalImage(cast.profile_path)}
                  alt={cast.name}
                  className="rounded-full"
                />
              </div>
              <div className="my-1 text-center group-hover:opacity-70">
                <p>{cast.name}</p>
                <p className="opacity-70">{cast.popularity}</p>
              </div>
            </div>
          ))} */}
        </Slider>
      </div>
    </>
  )
}
