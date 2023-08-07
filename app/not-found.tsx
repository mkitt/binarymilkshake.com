import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-700">404 Not Found</h1>
        <p>Could not find the requested resource.</p>
      </header>
      <ul className="flex text-sm">
        <li>
          <Link className="underline hover:text-magenta" href="/">
            Home
          </Link>
        </li>
      </ul>
    </main>
  )
}
