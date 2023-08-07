import { Metadata } from 'next'
import animals from '@/public/data/animals.json'
import Carousel from '@/components/Carousel'

export const metadata: Metadata = {
  title: 'Winter Park, Colorado A-Frame',
  description: 'Animals of the day for AK.',
}

const getSlides = () => {
  const width = 1080
  const height = 1080
  return animals.slice(0, 20).map((animal) => ({
    alt: animal,
    id: animal.toLowerCase().replace(/\s/g, '-'),
    src: `https://source.unsplash.com/${width}x${height}/weekly?${animal}`,
    width,
    height,
  }))
}

export default async function Page() {
  const slides = getSlides()
  return (
    <main className="min-h-screen xl:container">
      <header className="p-4">
        <h1 className="text-2xl font-700">The A-Frame</h1>
        <h2>Winter Park, Colorado</h2>
      </header>
      <Carousel slides={slides} />
    </main>
  )
}
