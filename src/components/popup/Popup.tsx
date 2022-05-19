import React from 'react'
import { default as _ReactPlayer, ReactPlayerProps } from 'react-player'
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>

export const Popup: React.FC<{
  onShow: Function
  videoId: string
  autoPlay: boolean
}> = ({ onShow, videoId, autoPlay }) => {
  return (
    <>
      <div className="absolute top-[30%] left-[20%] z-50 bg-gray3 p-6">
        <span
          onClick={() => onShow()}
          className=" inline-block cursor-pointer py-1 px-4 font-medium text-white hover:bg-white2"
        >
          X close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls={true}
          playing={autoPlay}
        />
      </div>
    </>
  )
}
