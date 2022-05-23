import moment from 'moment'
import React, { memo } from 'react'
import Slider from 'react-slick'
import useSWR from 'swr'
import request from '../../utils/request'
import apiConfig from '../../../pages/api/apiConfig'
import { PersonType } from '../..//type/type'
import { TitleCategories } from '../title/TitleCategories'
import { fetcher } from '../../services/fetcher'
import Link from 'next/link'

const BornToday: React.FC<{ personPopular: PersonType[] }> = ({ personPopular }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  const { data, error } = useSWR(request.fetchPersonPopular, fetcher, {
    fallbackData: personPopular,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <TitleCategories title={`People born on ${moment().format('MMM Do YY')}`}>Born today</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          {data.results.map((person: PersonType) => (
            <div className="group" key={person.id}>
              <div className="relative mx-5 cursor-pointer">
                <Link href={`/person/${person.id}`}>
                  <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
                </Link>
                <img src={apiConfig.orinalImage(person.profile_path)} alt={person.name} className="rounded-full" />
              </div>
              <div className="my-1 text-center group-hover:opacity-70">
                <p>{person.name}</p>
                <p className="opacity-70">{person.popularity}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default memo(BornToday)
