import type { NextPage } from 'next'

import Head from 'next/head'
import Header from '../src/components/header/Header'

import Carosel from '../src/components/Carosel'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white">
        <Carosel />
      </main>
    </div>
  )
}

export default Home
