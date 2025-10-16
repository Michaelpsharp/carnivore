import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
	return (
		<main className="p-8 max-w-md mx-auto space-y-6">
			<div>
				<h1 className="text-2xl font-bold">Login</h1>
				<p className="text-muted-foreground mt-2">Example form using shadcn-style inputs.</p>
			</div>
			<form className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="you@example.com" required />
				</div>
				<div className="space-y-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" required />
				</div>
				<Button type="submit">Sign in</Button>
			</form>
		</main>
	)
}


