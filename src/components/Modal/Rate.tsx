import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import MovieServices from '~/services/MovieServices'

export const Rate: React.FC<{
  onShow: Function
  movieId: string
}> = ({ onShow, movieId }) => {
  const [currentStar, setCurrentStar] = useState<number>(0)
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined)
  const stars = Array.from({ length: 10 }, (_, i) => i + 1)

  const handleClick = (value: number) => {
    setCurrentStar(value)
  }

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const router = useRouter()
  const account = useSelector((state: RootState) => state.account)
  const [rateSuccess, setRateSuccess] = useState<boolean>(false)

  const redirect = router.asPath.split('?')[1]

  const handleRateMovie = async () => {
    if (account.session_id) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        await MovieServices.postRateMovie(movieId, account.session_id, { value: currentStar }, config)
        setRateSuccess(!rateSuccess)
      } catch (error) {
        console.log(error)
      }
    } else {
      if (redirect) {
        router.push(`/login?movie/${movieId}`)
      } else {
        router.push('/login')
      }
    }
  }
  return (
    <>
      <div className="fixed top-[40%] left-1 z-50 translate-y-[-50%] text-white sm:left-[50%] sm:translate-x-[-50%]">
        <div className="relative bg-gray px-16 pt-12 pb-8">
          <span
            className="absolute top-[-10%] right-0 h-8 w-8 cursor-pointer rounded-full text-center leading-8 hover:bg-white4"
            onClick={() => onShow()}
          >
            x
          </span>
          <div className="absolute top-[-20%] left-[42%]">
            <div className="relative">
              <div className="absolute left-[42%] top-[36%] text-black">{currentStar > 0 ? currentStar : '?'}</div>
              <FaStar className="text-[72px] text-blue1" />
            </div>
          </div>
          <div className="text-center">
            <p className="py-4 text-12 text-yellow-400">RATE THIS</p>
            <p className="tracking-wide">Doctor Strange in the Multiverse of Madness</p>
            <div className="my-6 flex cursor-pointer justify-center gap-2 text-20">
              {stars.map((star: number) => (
                <span key={star} onClick={() => setCurrentStar(star)}>
                  <FaStar
                    onClick={() => handleClick(star)}
                    onMouseOver={() => handleMouseOver(star)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentStar) >= star ? 'rgb(87 153 239)' : ''}
                  />
                </span>
              ))}
            </div>
            <p className="cursor-pointer bg-white4 px-12 py-2" onClick={() => handleRateMovie()}>
              {rateSuccess ? <FaCheck className="mx-auto" /> : 'Rate'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
