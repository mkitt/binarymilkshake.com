'use client'
import ErrorPage from './error'

type PropsType = {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function GlobalError(props: PropsType) {
  return (
    <html className="selection:bg-magenta selection:text-white" lang="en">
      <body className="mood-light min-h-screen dark:mood-dark">
        <ErrorPage {...props} />
      </body>
    </html>
  )
}
