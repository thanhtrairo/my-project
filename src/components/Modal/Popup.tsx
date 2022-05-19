import React from 'react'
import ReactPlayer from 'react-player'

export const Popup: React.FC<{
  onShow: Function
  videoId: string
  autoPlay: boolean
}> = ({ onShow, videoId, autoPlay }) => {
  return (
    <>
      <div className="fixed top-[30%] left-[20%] z-50 bg-gray3 p-6">
        <span
          onClick={() => onShow()}
          className=" inline-block cursor-pointer py-1 px-4 font-medium text-white hover:bg-white2"
        >
          X close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing={autoPlay}
        />
      </div>
    </>
  )
}
