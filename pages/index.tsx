import type { GetStaticProps, NextPage } from 'next'
import axios from 'axios'

import Head from 'next/head'
import Header from '../src/components/header/Header'
import Carosel from '../src/components/Carosel'
import { Featured } from '../src/components/Featured'
import { Watch } from '../src/components/watch/Watch'
import { MoveToWatch } from '../src/components/watch/MoveToWatch'
import { Video } from '../src/components/Video'
import { Streaming } from '../src/components/Streaming'
import { ExportsMovie } from '../src/components/ExportsMovie/ExportsMovie'
import { MoveToExpore } from '../src/components/MoveToExpore/MoveToExpore'
import { Footer } from '../src/components/Footer'
import request from '../src/utils/request'
import useSWR from 'swr'

export const fetcher = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}

const Home: NextPage<any> = ({ moviePopular }) => {
  const { data, error } = useSWR(request.fetchPopular, fetcher, {
    fallbackData: moviePopular,
    refreshInterval: 2000,
  })

  console.log(data.results)
  return (
    <div className="">
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white ">
        <div className="container mx-auto">
          <Carosel />
          <Featured />
          <Watch />
          <MoveToWatch />
          <Video />
          <Streaming />
          <ExportsMovie />
          <MoveToExpore />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [moviePopular] = await axios
    .all([axios.get(request.fetchPopular)])
    .then(
      axios.spread((...res) => {
        return res
      })
    )

  return {
    props: {
      moviePopular: moviePopular.data.results,
    },
  }
}

export default Home
