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
      <section className="mt-8 flex max-w-4xl">
        <div className="flex flex-col gap-4 p-4 text-sm">
          <div>
            <h2 className="text-xl font-600">
              6 month Seasonal Rental - Sleeps 2-5
            </h2>
            <h3 className="text-lg font-600">
              Nov 1 thru April 2024 | $2,000/mo | Furnished
            </h3>
            <p>
              <strong>232 Marble Road, Tabernash CO 80478</strong>
            </p>
          </div>

          <p>
            Scandinavian design Aframe with wood stove, cozy living area and
            large back deck. Property backs up to open space with the YMCA of
            the Rockies accessible right out the back door to the west, 5 min
            walk to trails for hiking, snowshoeing, mtn biking, x-country
            skiing. Also backs up to 6th hole fare way of The Ridge course on
            Pole Creek Golf Course.
          </p>

          <ul>
            <li>1080 sq ft</li>
            <li>1 bedroom with queen bed</li>
            <li>
              office on upper level has full size pull out couch with featherbed
            </li>
            <li>couch downstairs also could sleep 1 (twin bed sized)</li>
            <li>laundry in entry closet</li>
            <li>ski storage in entry</li>
            <li>2 bathrooms</li>
            <li>- 1 is a powder room with commode/sink</li>
            <li>- 1 has full size shower + sink</li>
            <li>large backyard deck with grill</li>
            <li>outdoor fire pit</li>
          </ul>

          <ul>
            <li>includes century link internet</li>
            <li>plowing</li>
            <li>wood for wood stove</li>
            <li>trash (we share with neighbor)</li>
          </ul>

          <div>
            <p>not included:</p>
            <ul>
              <li>
                utilities (electric - we will leave in our name and bill you)
              </li>
              <li>
                tv service (we use streaming service through apple tv, tv in
                photos will stay)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
