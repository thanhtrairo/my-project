import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export const Loading = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center space-x-2 pt-[16%] text-center text-green-400">
      <FaSpinner className="animate-spin text-32 " />
      <p className="text-24">{children}</p>
    </div>
  )
}
