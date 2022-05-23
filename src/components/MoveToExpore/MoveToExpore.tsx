import React, { memo } from 'react'
import { Title } from '../title/Title'
import { TitleCategories } from '../title/TitleCategories'
import Slider from 'react-slick'
import { Movie } from '../Movie'
import BornToday from './BornToday'
import { TopNext } from './TopNext'
import { PersonType } from '../../type/type'

const MoveToExpore: React.FC<{ personPopular: PersonType[] }> = ({ personPopular }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <>
      <Title>More to explore</Title>
      <TitleCategories title="">Editor's picks</TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          <Movie title="list" list={true} price={false} name={true}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="list" list={true} price={false} name={true}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="list" list={true} price={false} name={true}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
          <Movie title="list" list={true} price={false} name={true}>
            What TV Shows Are Renewed or Canceled?
          </Movie>
        </Slider>
      </div>
      <BornToday personPopular={personPopular} />
      <TopNext />
    </>
  )
}

export default memo(MoveToExpore)
