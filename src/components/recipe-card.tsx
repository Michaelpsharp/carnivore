import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Recipe } from '@/types/recipe'

export function RecipeCard({ recipe }: { recipe: Recipe }) {
	return (
		<Card>
			{recipe.image_url ? (
				<img src={recipe.image_url} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
			) : null}
			<CardHeader>
				<CardTitle className="text-base">
					<Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="text-sm text-muted-foreground">
				{recipe.summary ?? ''}
			</CardContent>
		</Card>
	)
}


