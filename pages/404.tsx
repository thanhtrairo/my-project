import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <>
      <div className="container my-5">
        <div className="">
          <img className="" src="../img/404.png" alt="Not-found" />
          <div className="bg-green-600 px-12 py-4 text-center">
            <Link href="/">
              <a className="text-white no-underline">Home page</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
