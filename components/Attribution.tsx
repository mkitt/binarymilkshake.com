function Attribution() {
  return (
    <article className="relative w-screen h-screen text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <h2 className="flex flex-col items-center justify-center w-full h-full">
        <span className="text-xl">See you tomorrow!</span>
        <span aria-label=":emojis:" className="mt-4" role="img">
          🐶🐰🦊🐻🐼🐨🌋
        </span>
      </h2>
      <p className="absolute bottom-0 right-0 p-2 text-xs">
        images: <a href="https://unsplash.com">unsplash.com</a>
      </p>
    </article>
  )
}

export default Attribution
