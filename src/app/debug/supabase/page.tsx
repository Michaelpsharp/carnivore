import { createClient } from "@supabase/supabase-js";

export default async function Page() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const ok = Boolean(url && key);

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("recipes")
    .select("id,title,slug,created_at")
    .order("created_at", { ascending: false })
    .limit(10);

  return (
    <pre style={{ padding: 24, whiteSpace: "pre-wrap" }}>
      {JSON.stringify(
        {
          envLoaded: ok,
          urlPrefix: url?.slice(0, 40),
          haveKey: !!key,
          error: error?.message ?? null,
          rows: data ?? [],
          rowCount: data?.length ?? 0,
        },
        null,
        2
      )}
    </pre>
  );
}


