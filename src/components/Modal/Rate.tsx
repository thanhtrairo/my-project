import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaCheck, FaRegStar, FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import MovieServices from '~/services/MovieServices'

export const Rate: React.FC<{
  onShow: Function
  movieId: string
}> = ({ onShow, movieId }) => {
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [star, setStar] = useState<number>(0)

  const router = useRouter()
  const account = useSelector((state: RootState) => state.account)
  const [rateSuccess, setRateSuccess] = useState<boolean>(false)

  const handleRateMovie = async (id: string, star: number) => {
    if (account.session_id) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        await MovieServices.postRateMovie(id, account.session_id, { value: star }, config)
        setRateSuccess(!rateSuccess)
      } catch (error) {
        console.log(error)
      }
    } else {
      router.push(`/login?movie/${movieId}`)
    }
  }

  return (
    <>
      <div className="fixed top-[30%] left-1 z-50 text-white sm:left-[30%]">
        <div className="relative bg-gray px-16 pt-12 pb-8">
          <span
            className="absolute top-[-10%] right-0 h-8 w-8 cursor-pointer rounded-full text-center leading-8 hover:bg-white4"
            onClick={() => onShow()}
          >
            x
          </span>
          <div className="absolute top-[-20%] left-[42%]">
            <div className="relative">
              <div className="absolute left-[42%] top-[36%] text-black">{star > 0 ? star : '?'}</div>
              <FaStar className="text-[72px] text-blue1" />
            </div>
          </div>
          <div className="text-center">
            <p className="py-4 text-12 text-yellow-400">RATE THIS</p>
            <p className="tracking-wide">Doctor Strange in the Multiverse of Madness</p>
            <div className="my-6 flex cursor-pointer justify-center gap-2 text-20">
              {stars.map((star: number) => (
                <span key={star} className="" onClick={() => setStar(star)}>
                  <FaRegStar />
                </span>
              ))}
            </div>
            <p className="cursor-pointer bg-white4 px-12 py-2" onClick={() => handleRateMovie(movieId, star)}>
              {rateSuccess ? <FaCheck className="mx-auto" /> : 'Rate'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
