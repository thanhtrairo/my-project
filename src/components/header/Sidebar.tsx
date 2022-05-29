import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { AccountType } from '~/type/type'
// import Language from './Language'

export const Sidebar: React.FC<{ onShow: Function }> = ({ onShow }) => {
  const [account, setAccount] = useState<AccountType>({ success: false, session_id: '', accountId: '', username: '' })
  useEffect(() => {
    const requestToken = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account') || '') : ''
    setAccount(requestToken)
  }, [])
  return (
    <div className="sidebar absolute left-0 top-full z-20 bg-black1 py-4">
      <div className="relative">
        <FaRegWindowClose onClick={() => onShow()} className="absolute right-0 top-[-20%] text-20 hover:text-red-600" />
        <Link href="/">
          <li>Home</li>
        </Link>
        {account.session_id ? (
          <li className="group relative mr-1">
            Hi you
            <div className="absolute top-0 right-0 z-20 hidden group-hover:block">
              <div className="absolute top-[110%] left-0 bg-black1 ">
                <Link href="/profile">
                  <div className="px-6 py-2 hover:bg-gray2">My profile</div>
                </Link>
                <div className="px-6 py-2 hover:bg-gray2" onClick={() => localStorage.removeItem('account')}>
                  Logout
                </div>
              </div>
            </div>
          </li>
        ) : (
          <Link href="/login">
            <li>Sign In</li>
          </Link>
        )}

        {/* <li className="group relative">
          EN
          <div className="absolute top-0 right-0 hidden group-hover:block">
            <Language />
          </div>
        </li> */}
      </div>
    </div>
  )
}
