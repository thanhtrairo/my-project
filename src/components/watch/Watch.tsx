import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '~/redux/modal/modalRateSlice'
import { RootState } from '~/redux/store'
import { MovieType } from '../../type/type'
import { Popup } from '../Modal/Popup'
import { Rate } from '../Modal/Rate'
import { Title } from '../title/Title'
import { WatchList } from './WatchList'
import { WatchListComponent } from './WatchListComponent'

export const Watch: React.FC<{ moviePopular: MovieType[] }> = ({ moviePopular }) => {
  const modalShow = useSelector((state: RootState) => state.modalShow)
  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch(
      setShow({
        rate: {
          showRate: false,
          movieId: '',
        },
        video: {
          showVideo: false,
          videoId: '',
        },
      })
    )
  }

  return (
    <>
      {modalShow.rate.showRate && <Rate onShow={() => handleShow()} movieId={modalShow.rate.movieId} />}
      {modalShow.video.showVideo && <Popup onShow={() => handleShow()} videoId={modalShow.video.videoId} />}
      {(modalShow.rate.showRate || modalShow.video.showVideo) && (
        <div
          className="fixed top-0 left-0 z-20 h-screen w-full bg-blackOver group-hover:block"
          onClick={() => handleShow()}
        ></div>
      )}
      <div className="flex flex-row items-center justify-between">
        <Title>What to watch</Title>
        <h2 className="text hidden cursor-pointer flex-row items-center space-x-2 text-blue1 sm:flex">
          Get more recommendations <FaAngleRight />
        </h2>
      </div>
      <div>
        <WatchList />
        <WatchListComponent
          movieList={moviePopular}
          titleCategories="Fan favorites"
          titleCategoriesPlaceholder="This week's top TV and movies"
        />
      </div>
    </>
  )
}
