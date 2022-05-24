import React, { useState } from 'react'
import Header from '../../src/components/header/Header'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { accountLogin } from '~/redux/account/acountSlice'
import { useEffect } from 'react'
import { RootState } from '~/redux/store'
import MovieServices from '~/services/MovieServices'

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const dispatch = useDispatch()
  const account = useSelector((state: RootState) => state.account)
  const redirect = router.asPath.split('?')[1]

  useEffect(() => {
    if (account.session_id && redirect) {
      router.push(redirect)
    }
  }, [account, redirect])

  const handleCreateToken = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const createToken = async () => {
      try {
        const resToken = await MovieServices.getRequestToken()
        setToken(resToken.data.request_token)
      } catch (error) {
        setError('confirm failed')
      }
    }
    createToken()
  }

  const handleCreateSession = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const createSession = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const resSession = await MovieServices.postLogin({ request_token: token }, config)
        const resAccount = await MovieServices.getAccount(resSession.data.session_id)

        const req = {
          success: resSession.data.success,
          session_id: resSession.data.session_id,
          accountId: resAccount.data.id,
          username: resAccount.data.username,
        }
        dispatch(accountLogin(req))
        router.push('/')
      } catch (error) {
        setError('login failed')
      }
    }
    createSession()
  }

  return (
    <>
      <Header />
      {token && (
        <h1 className="my-6 text-center">
          <a
            href={`https://www.themoviedb.org/authenticate/${token}`}
            target="_blank"
            className="bg-red-400 px-10 py-3"
          >
            Confirm
          </a>
        </h1>
      )}
      {error && (
        <h1 className="my-6 text-center">
          <span className="bg-red-400 px-10 py-3">{error}</span>
        </h1>
      )}
      <div className="container mx-auto bg-white ">
        <div className="flex justify-center ">
          <div>
            <h2 className="text-32">Sign in</h2>
            <div className="border-[1px] border-solid border-gray6">
              <form className="p-4">
                <div className="text-center">
                  <button
                    onClick={(e) => handleCreateToken(e)}
                    className="inline-block min-w-[300px] bg-yellow-400 px-6 py-2 hover:bg-yellow-500"
                  >
                    Create request token
                  </button>
                </div>
                <div className="my-4 text-center">
                  <button
                    onClick={(e) => handleCreateSession(e)}
                    className="inline-block min-w-[300px] bg-yellow-400 px-6 py-2 hover:bg-yellow-500"
                  >
                    Create session
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
