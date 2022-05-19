import Link from 'next/link'
import React from 'react'
import { FaFacebookMessenger, FaFacebookSquare, FaInstagram, FaPaperPlane, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="mb-12 flex-col space-y-8 text-center">
      <div className="flex items-center justify-center space-x-4 text-24">
        <FaFacebookSquare />
        <FaInstagram />
        <FaFacebookMessenger />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="flex items-center justify-center space-x-8">
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Get the IMDb App</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Help</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Site Index</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>IMDbPro</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Box Office Mojo</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>IMDb Developer</span> <FaPaperPlane />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Press Room</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Advertising</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Jobs</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Conditions of Use</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Privacy Policy</span> <FaPaperPlane />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="flex space-x-1 hover:underline">
            <span>Interest-Based Ads</span> <FaPaperPlane />
          </a>
        </Link>
      </div>
      <p>an amazion company</p>
      <p className="text-14 opacity-70">© 1990-2022 by IMDb.com, Inc.</p>
    </div>
  )
}
