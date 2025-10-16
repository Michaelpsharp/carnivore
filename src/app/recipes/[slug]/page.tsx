import { supabase } from '@/lib/supabase'
import type { Recipe } from '@/types/recipe'

type Params = { params: { slug: string } }

async function fetchRecipe(slug: string): Promise<Recipe | null> {
	const { data, error } = await supabase
		.from('recipes')
		.select('*')
		.eq('slug', slug)
		.single()
	if (error) {
		console.error('Failed to load recipe', error)
		return null
	}
	return data
}

export default async function RecipeDetailPage({ params }: Params) {
	const recipe = await fetchRecipe(params.slug)
	if (!recipe) {
		return (
			<main className="p-8 max-w-3xl mx-auto">
				<h1 className="text-2xl font-bold">Not found</h1>
				<p className="text-muted-foreground">Recipe does not exist.</p>
			</main>
		)
	}
	return (
		<main className="p-8 max-w-3xl mx-auto space-y-6">
			{recipe.image_url ? (
				<img src={recipe.image_url} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
			) : null}
			<h1 className="text-3xl font-bold">{recipe.title}</h1>
			{recipe.summary ? <p className="text-muted-foreground">{recipe.summary}</p> : null}
			{recipe.ingredients && recipe.ingredients.length > 0 ? (
				<section>
					<h2 className="text-lg font-semibold">Ingredients</h2>
					<ul className="list-disc pl-5 space-y-1">
						{recipe.ingredients.map((i, idx) => (
							<li key={idx}>{i}</li>
						))}
					</ul>
				</section>
			) : null}
			{recipe.instructions && recipe.instructions.length > 0 ? (
				<section>
					<h2 className="text-lg font-semibold">Instructions</h2>
					<ol className="list-decimal pl-5 space-y-1">
						{recipe.instructions.map((step, idx) => (
							<li key={idx}>{step}</li>
						))}
					</ol>
				</section>
			) : null}
			{recipe.source_url ? (
				<p className="text-sm">
					Source: <a className="underline" href={recipe.source_url} target="_blank" rel="noreferrer">{recipe.source_url}</a>
				</p>
			) : null}
		</main>
	)
}


