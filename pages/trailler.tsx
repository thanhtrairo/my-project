import clsx from 'clsx'
import React, { useState } from 'react'
import Header from '../src/components/header/Header'
import { Title } from '../src/components/title/Title'

function A() {
  const TRAILLERS = [
    'TRENDING TRAILERS',
    'MOST ANTICIPATED',
    'MOST POPULAR',
    'RECENTLY ADDED',
  ]
  const [active, setActive] = useState<string>('TRENDING TRAILERS')
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-gray3 text-white ">
        <div className="container mx-auto">
          <Title>Watch New Movie & TV Trailers</Title>
          <nav className="flex">
            {TRAILLERS.map((trailler) => (
              <div
                className={clsx('px-8 py-2', {
                  activeTrailer: active == trailler,
                })}
                onClick={() => setActive(trailler)}
              >
                {trailler}
              </div>
            ))}
          </nav>
        </div>
      </main>
    </>
  )
}

export default A
