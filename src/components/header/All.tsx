import React, { useRef, useState } from 'react'
import { FaAngleRight, FaSearch, FaTv } from 'react-icons/fa'

export default function All() {
  // const [active, setActive] = useState<string>()
  const ref = useRef()
  return (
    <div className="All absolute top-[110%] left-0 z-10 whitespace-pre bg-gray text-white">
      <li className="activeAll group">
        <FaSearch />
        <p>All</p>
      </li>
      <li className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--movie searchCatSelector__itemIcon group-hover:opacity-100"
          id="iconContext-movie"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
        </svg>
        <p>Titles</p>
      </li>
      <li>
        <FaTv />
        <p>TV Episodes</p>
      </li>
      <li className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--people searchCatSelector__itemIcon group-hover:opacity-100"
          id="iconContext-people"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path>
        </svg>
        <p>Celebs</p>
      </li>
      <li className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--business searchCatSelector__itemIcon group-hover:opacity-100"
          id="iconContext-business"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
        </svg>
        <p>Companies</p>
      </li>
      <li className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--label searchCatSelector__itemIcon group-hover:opacity-100"
          id="iconContext-label"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path>
        </svg>
        <p>Keywords</p>
      </li>
      <li className="group border-t-[1px] border-slate-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--find-in-page searchCatSelector__itemIcon group-hover:opacity-100"
          id="iconContext-find-in-page"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M20 19.59V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.86.56-1.89.88-3 .82-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78.33 1.46.01 2.82-.7 3.9L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
        </svg>
        <p>Advanced Search</p>
        <FaAngleRight />
      </li>
    </div>
  )
}
