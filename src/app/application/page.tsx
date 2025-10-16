import { Button } from '@/components/ui/button'
import { PromptCard } from '@/components/prompt-card'

export default function ApplicationPage() {
	return (
		<main className="p-8 max-w-3xl mx-auto space-y-6">
			<h1 className="text-2xl font-bold">Test Starter Kit</h1>
			<p className="text-muted-foreground">
				This page will become the intelligent demo area for the carnivore recipe directory.
			</p>
			<div className="rounded-lg border p-6 space-y-3">
				<h2 className="font-semibold">Upgrade with shadcn/ui</h2>
				<p className="text-sm text-muted-foreground">We'll add richer blocks and hover-card prompts next.</p>
				<Button>Example Button</Button>
			</div>
			<PromptCard
				title="Claude Code Prompt: Install 5DS Blocks"
				prompt={`Install shadcn/ui blocks and enhance pages in Test. Use the existing Tailwind v4 setup and component patterns. Add .env.local if missing. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
			/>
		</main>
	)
}


