import axios from 'axios'
import React, { useState } from 'react'
import request from '../../src/utils/request'
import Header from '../../src/components/header/Header'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { accountLogin } from '~/redux/account/acountSlice'

const Login = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const login = async (email: string, password: string) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const resToken = await axios.get(request.fetchToken)
        const req = {
          username: email,
          password: password,
          request_token: resToken.data.request_token,
        }
        await axios.post(request.fetchLogin, req, config)
        dispatch(accountLogin(req))
        router.push('/')
      } catch (error) {
        setError('wrong email or password')
      }
    }
    login(email, password)
  }

  return (
    <>
      <Header />
      {error && (
        <h1 className="my-6 text-center">
          <span className="bg-red-400 px-10 py-3">{error}</span>
        </h1>
      )}
      <div className="container mx-auto bg-white">
        <div className="flex justify-center ">
          <div>
            <h2 className="text-32">Sign in</h2>
            <div className="border-[1px] border-solid border-gray6">
              <form className="p-4">
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-2 border-[1px] border-solid border-gray6 px-1 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="my-2 border-[1px] border-solid border-gray6 px-1 focus:outline-none"
                  />
                </div>
                <div className="text-center">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="inline-block bg-yellow-400 px-6 py-2 hover:bg-yellow-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
