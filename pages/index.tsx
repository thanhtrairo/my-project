import type { GetServerSideProps } from 'next'
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
import { Footer } from '../src/components/Footer'
import request from '../src/utils/request'
import { MoveToExpore } from '../src/components/MoveToExpore/MoveToExpore'
import { Props } from '../src/type/type'

const Home = ({ moviePopular, movieTrending, movieStreamming, personPopular }: Props) => {
  return (
    <>
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white ">
        <div className="container mx-auto">
          <Carosel movieTrending={movieTrending} />
          <Featured />
          <Watch moviePopular={moviePopular} />
          <MoveToWatch />
          <Video />
          <Streaming movieStreamming={movieStreamming} />
          <ExportsMovie />
          <MoveToExpore personPopular={personPopular} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [moviePopular, movieTrending, movieStreamming, personPopular] = await axios
    .all([
      axios.get(request.fetchPopular),
      axios.get(request.fetchTrending),
      axios.get(request.fetchStreamming),
      axios.get(request.fetchPersonPopular),
    ])
    .then(
      axios.spread((...res) => {
        return res
      })
    )

  return {
    props: {
      moviePopular: moviePopular.data,
      movieTrending: movieTrending.data,
      movieStreamming: movieStreamming.data,
      personPopular: personPopular.data,
    },
  }
}

export default Home
