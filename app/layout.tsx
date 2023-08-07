import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Binary Milkshake',
  description: ':wave:',
}

type PropsType = {
  children: React.ReactNode
}

export default function RootLayout(props: PropsType) {
  const { children } = props
  return (
    <html className="selection:bg-magenta selection:text-white" lang="en">
      <body className="mood-light min-h-screen dark:mood-dark">{children}</body>
    </html>
  )
}
