import React from 'react'

export default function Language() {
  return (
    <div className="absolute top-[110%] left-0 z-10 bg-black1">
      <div className="flex p-3 hover:bg-gray2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--radio-button-checked language-menu-item-icon selected-language-icon activeAll"
          id="iconContext-radio-button-checked"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
        <p className="ml-3">English</p>
      </div>
      <div className="flex p-3 hover:bg-gray2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--radio-button-checked language-menu-item-icon selected-language-icon"
          id="iconContext-radio-button-checked"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
        <p className="ml-3">Vietnamses</p>
      </div>
    </div>
  )
}
