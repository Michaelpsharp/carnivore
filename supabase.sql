-- Recipes schema
create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text,
  ingredients text[],
  instructions text[],
  image_url text,
  source_url text,
  created_at timestamptz default now()
);

create index if not exists recipes_slug_idx on public.recipes (slug);


