import React from 'react'
import Slider from 'react-slick'
import { TitleCategories } from '../title/TitleCategories'

export const BornToday = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  return (
    <>
      <TitleCategories title="People born on May 14">
        Born today
      </TitleCategories>
      <div className="mt-4 mb-16">
        <Slider {...settings}>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
          <div className="group">
            <div className="relative mx-5 cursor-pointer">
              <div className="absolute top-0 left-0 hidden h-full w-full rounded-full bg-blackOver group-hover:block"></div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_QL75_UX140_CR0,8,140,140_.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="my-1 text-center group-hover:opacity-70">
              <p>Cate Blanchett</p>
              <p className="opacity-70">53</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
