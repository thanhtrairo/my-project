import React from 'react'
import { FaWindowClose } from 'react-icons/fa'

export default function Menu() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-gray py-8">
      <div className="mx-auto flex w-[50%] justify-between">
        <img src="/img/logo2.svg" alt="logo2" className="" />
        <FaWindowClose className="text-48" />
      </div>
      <div>
        <div className="flex flex-row">
          <div className="basis-1/3">1</div>
          <div className="basis-1/3">1</div>
          <div className="basis-1/3">1</div>
          <div className="basis-1/3">1</div>
        </div>
      </div>
    </div>
  )
}
