import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore',
  description: 'Carnivore recipes and community',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-10 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">Carnivore</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/application">Starter Kit</Link>
              <Link href="/recipes">Recipes</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Carnivore</span>
            <div className="flex items-center gap-4">
              <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">shadcn/ui</a>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}


