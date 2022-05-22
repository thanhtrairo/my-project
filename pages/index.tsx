import type { GetServerSideProps } from 'next'

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
import { MoveToExpore } from '../src/components/MoveToExpore/MoveToExpore'
import { Props } from '../src/type/type'
import MovieServices from '~/services/MovieServices'

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
  try {
    const result = await Promise.all([
      MovieServices.getPopularMovies(),
      MovieServices.getTrendingMovies(),
      MovieServices.getComingSoonMovies(),
      MovieServices.getPopularPerson(),
    ])
    return {
      props: {
        moviePopular: result[0].data,
        movieTrending: result[1].data,
        movieStreamming: result[2].data,
        personPopular: result[3].data,
      },
    }
  } catch (e) {
    return {
      // FIXME: should redirect to 500 page
      props: {
        moviePopular: {},
        movieTrending: {},
        movieStreamming: {},
        personPopular: {},
      },
      redirect: '/',
    }
  }
}

export default Home
