import { Metadata } from 'next'
import Carousel from '@/components/Carousel'
import slides from './slides.json'

export const metadata: Metadata = {
  title: 'Winter Park, Colorado A-Frame',
  description: 'The A-Frame in Winter Park, Colorado',
}

function getSlides() {
  return slides.map((slide) => ({
    alt: 'Slide ' + slide.filename.replace(/\.jpg$/, '').replace(/-/g, ' '),
    id: slide.filename,
    src: `https://assets.binarymilkshake.com/colorado/the-aframe/${slide.filename}`,
    width: slide.orientation === 'landscape' ? 2048 : 1536,
    height: slide.orientation === 'landscape' ? 1536 : 2048,
  }))
}

export default async function Page() {
  const slides = getSlides()
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col pb-8">
      <header className="p-4">
        <h1 className="text-2xl font-700">The A-Frame</h1>
        <p>Winter Park, Colorado</p>
      </header>
      <Carousel slides={slides} />
      <section className="flex max-w-4xl">
        <div className="flex flex-col gap-4 p-4 text-sm">
          <h2 className="text-xl font-600">A heading of things</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus venenatis neque, ut fermentum mi bibendum vel. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
          <p>
            Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nullam
            dignissim risus nec enim. Vestibulum volutpat pretium libero. Cras
            id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla
            eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.
          </p>
          <p>
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum.
          </p>
          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            quis gravida magna mi a libero. Vivamus sagittis lacus vel augue
            laoreet rutrum.
          </p>
        </div>
      </section>
    </main>
  )
}
