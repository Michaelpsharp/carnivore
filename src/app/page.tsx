import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
	return (
		<main className="min-h-screen p-8">
			<section className="mx-auto max-w-4xl text-center space-y-4 py-10">
				<h1 className="text-4xl font-bold tracking-tight">5 Day Sprint Framework Installed</h1>
				<p className="text-muted-foreground">
					Next.js + TypeScript + Tailwind v4 baseline. Explore the starter kit and component showcase.
				</p>
				<div className="flex items-center justify-center gap-3">
					<Link href="/application"><Button>View Starter Kit</Button></Link>
					<Link href="/dashboard"><Button variant="outline">View Component Showcase</Button></Link>
					<Link href="/login"><Button variant="ghost">View Login</Button></Link>
				</div>
			</section>
			<section className="mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Starter Kit</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						Set up hover-card prompts and demo features on /application.
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Dashboard</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						Docs-linked cards and component showcase using shadcn patterns.
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						Basic form using Input, Label, and Button. Connect auth later.
					</CardContent>
				</Card>
			</section>
		</main>
	)
}


