'use client'

import { scrollToHash } from '@/lib/scroll'
import clsx from 'clsx'
import Image from 'next/image'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import Paddle from './Paddle'

// -------------------------------------

type PropsType = React.HTMLAttributes<HTMLDivElement> & {
  readonly slides: ReadonlyArray<{
    readonly alt: string
    readonly id: string
    readonly src: string
    readonly width: number
    readonly height: number
  }>
}

export default function Carousel(props: PropsType) {
  const { className, slides } = props
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLUListElement>(null)

  function next() {
    const nextSlide = slides[currentSlide + 1]
    const slide = nextSlide ?? slides[0]
    if (slide?.id) scrollToHash(slide.id)
  }

  function prev() {
    const prevSlide = slides[currentSlide - 1]
    const slide = prevSlide ?? slides[slides.length - 1]
    if (slide?.id) scrollToHash(slide.id)
  }

  function onScrollSnapComplete(e: ScrollSnapEventType) {
    setCurrentSlide(e.panelIndex)
  }

  function onTabClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const id = e.currentTarget.getAttribute('data-for')
    if (id) scrollToHash(id)
  }

  useBindKeys({ next, prev })
  useScrollSnapEvents({ containerRef, onScrollSnapComplete })

  return (
    <section className={clsx('relative', className)}>
      <ul
        className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth md:max-h-screen"
        ref={containerRef}
      >
        {slides.map((slide, index) => (
          <li
            key={`slide-${slide.id}`}
            id={slide.id}
            className="flex w-full flex-none snap-start justify-center"
            aria-current={index === currentSlide}
          >
            <Image
              className="h-auto w-full object-contain"
              alt={slide.alt}
              src={slide.src}
              width={slide.width}
              height={slide.height}
            />
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 opacity-0 lg:opacity-100">
        <Paddle direction="west" onClick={prev} />
        <Paddle direction="east" onClick={next} />
      </div>
      <div className="absolute inset-x-0 bottom-2 flex min-h-6 justify-center px-2">
        <div className="hidden max-w-[15.5rem] overflow-hidden rounded-full bg-black/50 px-1 sm:block">
          <ul
            className="flex transition-transform"
            style={{
              transform: `translateX(${-Math.floor(currentSlide / 10) * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <li key={`indicator-${slide.id}`}>
                <button
                  aria-selected={index === currentSlide}
                  data-for={`${slide.id}`}
                  className="group/indicator flex size-6 items-center justify-center bg-transparent aria-selected:pointer-events-none"
                  onClick={onTabClick}
                  role="tab"
                >
                  <span className="inline-flex size-2 rounded-full bg-gray group-aria-selected/indicator:bg-silver" />
                  <span className="sr-only">View {slide.alt}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span className="absolute right-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </section>
  )
}

// -------------------------------------

type BindKeysPropsType = {
  readonly next: () => void
  readonly prev: () => void
}

function useBindKeys(props: BindKeysPropsType) {
  const { next, prev } = props

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    },
    [next, prev],
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
}

// -------------------------------------

type ScrollSnapEventType = {
  readonly panelIndex: number
}

type ScrollSnapPropsType = {
  containerRef: RefObject<HTMLElement>
  onScrollSnapComplete: (event: ScrollSnapEventType) => void
}

function useScrollSnapEvents(props: ScrollSnapPropsType) {
  const { containerRef, onScrollSnapComplete } = props

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function checkScrollSnapCompletion() {
      if (!el) return
      const snapDestination =
        Math.round(el.scrollLeft / el.clientWidth) * el.clientWidth
      const isScrollSnapComplete = el.scrollLeft === snapDestination
      if (isScrollSnapComplete) {
        onScrollSnapComplete({
          panelIndex: snapDestination / el.clientWidth,
        })
      }
    }
    el.addEventListener('scroll', checkScrollSnapCompletion)
    return () => {
      el.removeEventListener('scroll', checkScrollSnapCompletion)
    }
  }, [containerRef, onScrollSnapComplete])
}
