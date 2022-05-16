import React from 'react'

export const MovieSearch = () => {
  return (
    <div className="group mx-2 hover:cursor-pointer">
      <div className="flex space-x-4">
        <div className=" relative ">
          <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX90_CR0,0,90,133_.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-1 group-hover:opacity-70 ">
          <p>Box Office: ‘Doctor Strange 2’ Crosses 550 Million Globally</p>
          <div className="text-12 opacity-70">
            <span>May 13</span>
            <span>Variety Film + TV</span>
          </div>
        </div>
      </div>
    </div>
  )
}
