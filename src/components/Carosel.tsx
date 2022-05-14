import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { SvgAdd } from './SvgAdd'
import { Play } from './Play'

export default function Carosel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className=" relative  my-4">
      <div className="group w-8/12 hover:cursor-pointer">
        <Slider {...settings}>
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg 500w, https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX750_CR0,0,750,422_.jpg 750w, https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg 1000w"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="relative flex flex-row items-end space-x-4">
                <div className="basis-3/12 px-6">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                    alt=""
                  />
                  <div className="absolute top-0 left-6">
                    <SvgAdd width="36" height="50" />
                  </div>
                </div>
                <div className="basis-8/12">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Play width="70" height="70" />
                    </div>
                    <div className="">
                      <p className="text-36">'Cha Cha Real Smooth'</p>
                      <p className="text-20 opacity-70">Watch the Trailer</p>
                    </div>
                    <p className="text-20 opacity-70">2.51</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg 500w, https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX750_CR0,0,750,422_.jpg 750w, https://m.media-amazon.com/images/M/MV5BMDU3Y2ZjYTktMjY5OC00ODEwLWIwMjMtMGYxYTI4OTJkNDUyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg 1000w"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="relative flex flex-row items-end space-x-4">
                <div className="basis-3/12 px-6">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                    alt=""
                  />
                  <div className="absolute top-0 left-6">
                    <SvgAdd width="36" height="50" />
                  </div>
                </div>
                <div className="basis-8/12">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <svg
                        width="70"
                        height="70"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-8f5243a8-5 jdPzoP slide-caption-play-icon group-hover:fill-yellow-400"
                        id="iconContext-play-circle-outline-large-inline"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                      >
                        <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                        <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                      </svg>
                    </div>
                    <div className="">
                      <p className="text-36">'Cha Cha Real Smooth'</p>
                      <p className="text-20 opacity-70">Watch the Trailer</p>
                    </div>
                    <p className="text-20 opacity-70">2.51</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="absolute top-0 right-[-1%] w-4/12">
        <h2 className="text-yellow-400">Up next</h2>
        <div className="py-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row">
              <div className="basis-3/12 px-3">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                  alt=""
                />
              </div>
              <div className="basis-9/12 px-4">
                <div className="group flex flex-col space-y-2 hover:cursor-pointer">
                  <div className="flex items-end space-x-2 ">
                    <Play width="32" height="32" />
                    <p className="opacity-70">2:15</p>
                  </div>
                  <div>
                    <p>'Cha Cha Real Smooth'</p>
                    <p className="text-14 opacity-70">Watch the Trailer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-3/12 px-3">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                  alt=""
                />
              </div>
              <div className="basis-9/12 px-4">
                <div className="group flex flex-col space-y-2 hover:cursor-pointer">
                  <div className="flex items-end space-x-2 ">
                    <Play width="32" height="32" />
                    <p className="opacity-70">2:15</p>
                  </div>
                  <div>
                    <p>'Cha Cha Real Smooth'</p>
                    <p className="text-14 opacity-70">Watch the Trailer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-3/12 px-3">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX140_CR0,0,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX210_CR0,0,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BYjNlOTk2YmQtN2M3MS00NWYzLTk1ZGQtNTdiZjg5NmQxNDhlXkEyXkFqcGdeQXVyMTQyODYzNzc2._V1_QL75_UX280_CR0,0,280,414_.jpg 280w"
                  alt=""
                />
              </div>
              <div className="basis-9/12 px-4">
                <div className="group flex flex-col space-y-2 hover:cursor-pointer">
                  <div className="flex items-end space-x-2 ">
                    <Play width="32" height="32" />
                    <p className="opacity-70">2:15</p>
                  </div>
                  <div>
                    <p>'Cha Cha Real Smooth'</p>
                    <p className="text-14 opacity-70">Watch the Trailer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="" passHref>
            <a className="flex items-center space-x-2 pl-3 pt-4 text-20 font-medium hover:text-yellow-400">
              <span>Browse trailers</span> <FaAngleRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
