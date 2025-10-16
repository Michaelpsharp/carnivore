// src/app/recipes/page.tsx
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic"; // no cache while developing

export default async function RecipesPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // NOTE: no extra filters here—just read what's there
  const { data, error } = await supabase
    .from("recipes")
    .select("id, title, slug, summary")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Error loading recipes: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="p-6">No recipes yet.</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-semibold mb-4">Recipes</h1>
      <ul className="space-y-3">
        {data.map((r) => (
          <li key={r.id} className="border rounded p-4">
            <h2 className="text-xl font-medium">
              <Link href={`/recipes/${r.slug}`}>{r.title}</Link>
            </h2>
            {r.summary ? (
              <p className="text-sm opacity-80 mt-1">{r.summary}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
    