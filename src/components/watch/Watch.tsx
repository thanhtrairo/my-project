import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'
import { setShow } from '~/redux/modal/modalRateSlice'
import { RootState } from '~/redux/store'
import { fetcher } from '~/services/fetcher'
import request from '~/utils/request'
import { AccountType, MovieType } from '../../type/type'
import { Loading } from '../loading/Loading'
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
  const [account, setAccount] = useState<AccountType>({ success: false, session_id: '', accountId: '', username: '' })

  useEffect(() => {
    const account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account') || '') : ''
    setAccount(account)
  }, [])

  const { data: watchList } = useSWR(
    account.session_id ? request.fetchWatchList(account.accountId, account.session_id) : null,
    fetcher
  )

  const { data: ratingList } = useSWR(
    account.session_id ? request.fetchRatingList(account.accountId, account.session_id) : null,
    fetcher
  )

  if (!watchList || !ratingList) return <Loading />

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
        <WatchList watchList={watchList.results} ratingList={ratingList.results} />
        <WatchListComponent
          movieList={moviePopular}
          titleCategories="Fan favorites"
          titleCategoriesPlaceholder="This week's top TV and movies"
          watchList={watchList.results}
          ratingList={ratingList.results}
        />
      </div>
    </>
  )
}
