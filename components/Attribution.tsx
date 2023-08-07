function Attribution() {
  return (
    <article className="relative h-screen w-screen">
      <h2 className="flex h-full w-full flex-col items-center justify-center">
        <span className="text-xl">See you tomorrow!</span>
        <span aria-label=":emojis:" className="mt-4" role="img">
          🐶🐰🦊🐻🐼🐨
        </span>
      </h2>
      <p className="absolute bottom-0 right-0 p-2 text-xs">
        images: <a href="https://unsplash.com">unsplash.com</a>
      </p>
    </article>
  )
}

export default Attribution
