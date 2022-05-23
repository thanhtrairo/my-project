import React, { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'

export const Success: React.FC<{ onShowRateSuccess: Function }> = ({ onShowRateSuccess }) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      onShowRateSuccess()
    }, 1500)
    return () => clearTimeout(timeId)
  }, [])
  return (
    <>
      <div className="fixed top-[25%] left-[30%] z-[100] bg-gray3 p-6">
        <div className="flex px-16 py-10">
          <FaCheck className="text-36 text-green-400" />
          <span>Success</span>
        </div>
      </div>
    </>
  )
}
