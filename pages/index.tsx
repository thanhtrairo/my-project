import type { GetServerSideProps } from 'next'

import Head from 'next/head'
import Header from '../src/components/header/Header'
import Carousel from '../src/components/Carousel'
import { Watch } from '../src/components/watch/Watch'
import { MoveToWatch } from '../src/components/watch/MoveToWatch'
import { Video } from '../src/components/Video'
import { WatchListComponent } from '../src/components/watch/WatchListComponent'
import { ExportsMovie } from '../src/components/ExportsMovie/ExportsMovie'
import { Footer } from '../src/components/Footer'
import { MoveToExplore } from '../src/components/MoveToExplore/MoveToExplore'
import { Props } from '../src/type/type'
import MovieServices from '~/services/MovieServices'

const Home = ({ moviePopular, movieTrending, movieStreaming, personPopular }: Props) => {
  return (
    <>
      <Head>
        <title>Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden text-[80%] sm:text-[100%]">
        <Header />
        <main className="overflow-hidden bg-gray3 px-2 text-white">
          <div className="mx-auto sm:container">
            <Carousel movieTrending={movieTrending} />
            <div className=" mb-20">
              <Video title="Featured today" titleMovie="List" list name slidesShow={2} features />
            </div>
            <Watch moviePopular={moviePopular} />
            <MoveToWatch />
            <Video
              title="Exclusive videos"
              titleCategories="IMDb Originals"
              titleCategoriesPlaceholder="Celebrity interviews, trending entertainment stories, and expert analysis"
              titleMovie="3:45"
              name
              slidesShow={3}
            />
            <WatchListComponent
              movieList={movieStreaming}
              title="Explore what’s streaming"
              titleCategories="PRIME VIDEO"
              titleCategoriesPlaceholder="included with Prime"
            />
            <ExportsMovie />
            <MoveToExplore personPopular={personPopular} />
            <Footer />
          </div>
        </main>
      </div>
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
        moviePopular: result[0].data.results,
        movieTrending: result[1].data.results,
        movieStreaming: result[2].data.results,
        personPopular: result[3].data.results,
      },
    }
  } catch (e) {
    return {
      // FIXME: should redirect to 500 page
      props: {
        moviePopular: {},
        movieTrending: {},
        movieStreaming: {},
        personPopular: {},
      },
      redirect: '/',
    }
  }
}

export default Home
