import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Animal from '../components/Animal'
import Attribution from '../components/Attribution'
import Color from '../components/Color'
import { scrollToHash } from '../lib/scroll'
import animals from '../public/data/animals.json'
import colors from '../public/data/colors.json'

/*
 * TODO:
 * Scroll snap start
 * Installable PWA
 * Use virtual list
 */

function LandingPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [thing] = useState<'animals' | 'colors'>('animals')
  const [isGrid, setGrid] = useState(true)

  const Component = thing === 'animals' ? Animal : Color
  const collection = thing === 'animals' ? animals : props.colorKeys
  const btn = isGrid ? 'flex-grow w-32 h-32' : 'flex w-screen h-screen'
  const fn = () => (isGrid ? setGrid(false) : setGrid(true))

  useEffect(() => scrollToHash(globalThis.location?.hash), [])

  return (
    <main className="min-h-screen min-w-screen" role="main">
      <Head>
        <title>Binary Milkshake | {thing}</title>
      </Head>
      <div className="flex flex-wrap">
        {collection.map((k, i) => (
          <a id={k} className={btn} href={`/#${k}`} key={k + i} onClick={fn}>
            <Component subject={k} />
          </a>
        ))}
      </div>
      <Attribution />
    </main>
  )
}

// -------------------------------------

export async function getStaticProps() {
  const colorKeys = Object.keys(colors)
  return { props: { colorKeys } }
}

export default LandingPage
