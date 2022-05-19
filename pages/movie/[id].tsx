import axios from 'axios'
import React, { useState } from 'react'
import Slider from 'react-slick'

import { FaRegStar, FaStar } from 'react-icons/fa'
import Header from '../../src/components/header/Header'
import { Play } from '../../src/components/Play'
import { SvgAdd } from '../../src/components/SvgAdd'
import { TitleCategories } from '../../src/components/title/TitleCategories'
import { CastType, MovieType, VideoTraillerType } from '../../src/type/type'
import request from '../../src/utils/request'
import apiConfig from '../api/apiConfig'
import { Movie } from '../../src/components/Movie'
import { Popup } from '../../src/components/popup/Popup'

const MovieDetail: React.FC<{
  movieDetail: MovieType
  movieDetailTrailler: VideoTraillerType[]
  casts: CastType[]
}> = ({ movieDetail, movieDetailTrailler, casts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [showPupop, setShowPupop] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(false)
  const [videoId, setVideoId] = useState<string>('')

  const handleShowVideo = (key: string, autoPlay: boolean) => {
    setShowPupop(!showPupop)
    setVideoId(key)
    setAutoPlay(autoPlay)
  }

  return (
    <>
      {showPupop && <Popup onShow={() => setShowPupop(!showPupop)} videoId={videoId} autoPlay={autoPlay} />}
      {showPupop && <div className="absolute top-0 left-0 z-50 h-full w-full bg-blackOver group-hover:block"></div>}
      <Header />
      <main className="overflow-hidden bg-gray text-white ">
        <div className="container mx-auto ">
          <div className="my-10 flex items-center justify-between">
            <h1 className="text-36">{movieDetail.title}</h1>
            <div className="flex space-x-10">
              <div className="flex-col items-center">
                <p className="text-14 font-medium tracking-widest opacity-70">IMDb RATING</p>
                <div className="flex items-center space-x-2">
                  <FaStar className="fill-yellow-400 text-32" />
                  <div>
                    <p className="text-20">
                      {movieDetail.vote_average}
                      <span className="text-14 opacity-70">/10</span>
                    </p>
                    <p className="text-14 opacity-70">{Math.floor(movieDetail.vote_count * 0.01)}k</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-14 font-medium tracking-widest opacity-70 ">YOUR RATING</p>
                <div className="flex space-x-2">
                  <FaRegStar className="fill-blue1 text-32" />
                  <p className="text-20">Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="basis-9/12">
              <div
                className="group hover:cursor-pointer"
                onClick={() => handleShowVideo(movieDetailTrailler[0].key, true)}
              >
                <div className="relative">
                  <img src={apiConfig.orinalImage(movieDetail.backdrop_path)} alt={movieDetail.title} />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="relative flex flex-row items-end space-x-4">
                      <div className="basis-3/12 px-6">
                        <img src={apiConfig.orinalImage(movieDetail.poster_path)} alt={movieDetail.original_title} />
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
                            <p className="text-36">{movieDetail.title}</p>
                            <p className="hiddenText text-20 opacity-70">{movieDetail.overview}</p>
                          </div>
                          <p className="text-20 opacity-70">2.51</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-3/12">
              <div className="flex flex-col gap-3">
                {movieDetailTrailler.slice(1, 5).map((movie: VideoTraillerType) => (
                  <div className="flex flex-row" key={movie.id}>
                    <div className="basis-3/12 px-3">
                      <img src={apiConfig.orinalImage(movieDetail.poster_path)} alt={movieDetail.title} />
                    </div>
                    <div className="basis-9/12 px-4">
                      <div
                        className="group flex flex-col space-y-2 hover:cursor-pointer"
                        onClick={() => handleShowVideo(movie.key, false)}
                      >
                        <div className="flex items-end space-x-2 ">
                          <Play width="32" height="32" />
                          <p className="opacity-70">2:15</p>
                        </div>
                        <div>
                          <p>{movie.type}</p>
                          <p className="hiddenText text-14 opacity-70">{movie.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="basis-8/12">
              <p>name</p>
              <p>title</p>
              <p>date</p>
            </div>
            <div className="basis-4">
              <p>
                <span>+</span>
                <span>Add to Watchlist</span>
              </p>
              <p>
                <span>470 user reviews</span>
                <span>31 Critic reviews</span>
              </p>
            </div>
          </div>
          <div className=" textBlack bg-white">
            <div>
              <TitleCategories title="">Video</TitleCategories>
              <div>
                {/* <Slider {...settings}>
                  {movieDetailTrailler.map((movie: MovieType) => (
                    <div key={movie.id} className="">
                      <Movie
                        title="3:45"
                        list={false}
                        name={true}
                        price={false}
                      >
                        {movie.tit}
                      </Movie>
                    </div>
                  ))}
                </Slider> */}
              </div>
            </div>
            <div>
              <TitleCategories title="">Top casts</TitleCategories>
              <div>
                <div className="grid grid-cols-2">
                  {casts.slice(0, 11).map((cast: CastType) => (
                    <div key={cast.id} className="flex space-x-4">
                      <div>
                        <img src={apiConfig.orinalImage(cast.profile_path)} alt={cast.name} />
                      </div>
                      <div className="text-14">
                        <p className="font-medium">{cast.name}</p>
                        <p className="">as {cast.original_name}</p>
                        <p className="">{cast.popularity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await axios.get(request.fetchPopular)

  const paths = res.data.results.map((movie: MovieType) => {
    return {
      params: { id: String(movie.id) },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const [movieDetail, movieDetailTrailler, casts] = await axios
    .all([
      axios.get(request.fetchMovieDetail(params.id)),
      axios.get(request.fetchMovieDetailTrailler(params.id)),
      axios.get(request.fetchCasts(params.id)),
    ])
    .then(
      axios.spread((...res) => {
        return res
      })
    )
  return {
    props: {
      movieDetail: movieDetail.data,
      movieDetailTrailler: movieDetailTrailler.data.results,
      casts: casts.data.cast,
    },
  }
}

export default MovieDetail
