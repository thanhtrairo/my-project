import React from 'react'

export const Popup: React.FC<{ onShow: Function }> = ({ onShow }) => {
  return (
    <>
      <div className="absolute top-[30%] left-[35%] z-50">
        <p onClick={() => onShow(false)}>X</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y-OLcnr8eNo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  )
}
