import Head from 'next/head'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Animal from '../components/Animal'
import Color from '../components/Color'
import animals from '../data/animals.json'
import colors from '../data/colors.json'
import { scrollToHash } from '../lib/scroll'

/*
 * TODO:
 * Deploy!
 * Add exit screen unsplash attribution
 * Use virtual list @see notes
 * Scroll snap start
 */

function LandingPage() {
  const [thing] = useState<'animals' | 'colors'>('colors')
  const [isGrid, setIsGrid] = useState(true)

  const collection = useMemo(
    () => (thing === 'animals' ? animals : Object.keys(colors)),
    [thing],
  )

  const btn = useMemo(
    () => (isGrid ? 'flex-grow w-32 h-32' : 'flex w-screen h-screen'),
    [isGrid],
  )

  const Comp = useMemo(() => (thing === 'animals' ? Animal : Color), [thing])
  const full = useCallback(() => setIsGrid(false), [])
  const grid = useCallback(() => setIsGrid(true), [])

  useEffect(() => scrollToHash(window.location.hash), [])

  return (
    <main className="min-h-screen min-w-screen" role="main">
      <Head>
        <title>Binary Milkshake | {thing}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-wrap">
        {collection.map((k) => (
          <a
            id={k}
            className={btn}
            key={k}
            href={`/#${k}`}
            onClick={isGrid ? full : grid}
          >
            <Comp subject={k} />
          </a>
        ))}
      </div>
    </main>
  )
}

export default LandingPage
