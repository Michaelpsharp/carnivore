"use client"
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PromptCard({ title, prompt }: { title: string; prompt: string }) {
	const [copied, setCopied] = React.useState(false)
	async function onCopy() {
		await navigator.clipboard.writeText(prompt)
		setCopied(true)
		setTimeout(() => setCopied(false), 1500)
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-sm">{title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<pre className="whitespace-pre-wrap text-xs bg-slate-50 p-3 rounded-md border overflow-auto">{prompt}</pre>
				<Button onClick={onCopy} className="w-full">{copied ? 'Copied!' : 'Copy Prompt'}</Button>
			</CardContent>
		</Card>
	)
}


