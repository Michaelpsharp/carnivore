import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
	return (
		<main className="p-8 max-w-6xl mx-auto space-y-6">
			<h1 className="text-2xl font-bold">Component Showcase</h1>
			<p className="text-muted-foreground">Links to shadcn/ui docs and examples.</p>
			<div className="grid md:grid-cols-3 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Components</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						<a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">Documentation</a>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Themes</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						<a href="https://ui.shadcn.com/themes" target="_blank" rel="noreferrer">Theme system</a>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Colors</CardTitle>
					</CardHeader>
					<CardContent className="text-sm">
						<a href="https://ui.shadcn.com/colors" target="_blank" rel="noreferrer">Color palette</a>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}


