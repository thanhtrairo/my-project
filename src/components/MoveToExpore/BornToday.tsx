import moment from 'moment'
import React from 'react'
import Slider from 'react-slick'
import apiConfig from '../../../pages/api/apiConfig'
import { PersonType } from '../..//type/type'
import { TitleCategories } from '../title/TitleCategories'
import Link from 'next/link'

export const BornToday: React.FC<{ personPopular: PersonType[] }> = ({ personPopular }) => {
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
      <TitleCategories title={`People born on ${moment().format('MMM Do YY')}`}>Born today</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          {personPopular.map((person: PersonType) => (
            <div className="group" key={person.id}>
              <div className="relative mx-auto h-[180px] w-[180px] cursor-pointer overflow-hidden rounded-full lg:h-[140px] lg:w-[140px]">
                <Link href={`/person/${person.id}`}>
                  <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
                </Link>
                <img src={apiConfig.orinalImage(person.profile_path)} alt={person.name} />
              </div>
              <div className="my-1 text-center group-hover:opacity-70">
                <p>{person.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
