export type Recipe = {
	id: string
	title: string
	slug: string
	summary?: string | null
	ingredients?: string[] | null
	instructions?: string[] | null
	image_url?: string | null
	source_url?: string | null
	created_at?: string
}


