import type { GetStaticProps } from 'next'
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
import { CastType, MovieType } from '../src/type/type'
import { MoveToExpore } from '../src/components/MoveToExpore/MoveToExpore'

interface Props {
  movieTrending: MovieType[]
  moviePopular: MovieType[]
  movieCommingSoon: MovieType[]
  movieStreamming: MovieType[]
  casts: CastType[]
}

const Home = ({
  moviePopular,
  movieTrending,
  movieCommingSoon,
  movieStreamming,
  casts,
}: Props) => {
  return (
    <>
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white ">
        <div className="container mx-auto">
          <Carosel />
          <Featured />
          <Watch moviePopular={moviePopular} />
          <MoveToWatch />
          <Video />
          <Streaming movieStreamming={movieStreamming} />
          <ExportsMovie />
          <MoveToExpore casts={casts} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [
    moviePopular,
    movieTrending,
    movieCommingSoon,
    movieStreamming,
    casts,
  ] = await axios
    .all([
      axios.get(request.fetchPopular),
      axios.get(request.fetchTrending),
      axios.get(request.fetchCommingSoon),
      axios.get(request.fetchStreamming),
      axios.get(request.fetchCasts),
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
      movieCommingSoon: movieCommingSoon.data,
      movieStreamming: movieStreamming.data,
      casts: casts.data,
    },
  }
}

export default Home
