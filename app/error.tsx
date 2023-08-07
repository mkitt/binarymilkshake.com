'use client'

type PropsType = {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function Error({ error, reset }: PropsType) {
  return (
    <section className="flex min-h-screen flex-col gap-4 p-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-700">{error.name}</h1>
        <p className="text-sm first-letter:capitalize">{error.message}.</p>
      </header>
      {error.digest && (
        <pre className="whitespace-pre-wrap text-xs text-gray">
          Digest: {error.digest}
        </pre>
      )}
      {error.stack && (
        <pre className="whitespace-pre-wrap text-xs text-gray">
          {error.stack}
        </pre>
      )}
      <button
        className="max-w-fit text-left text-sm underline hover:text-magenta"
        onClick={() => reset()}
      >
        Retry
      </button>
    </section>
  )
}
