create extension if not exists "pgcrypto";

create table if not exists public.restaurantes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  nome text not null,
  tipo text not null,
  margem_alvo numeric(5,2) not null default 65,
  created_at timestamptz not null default now()
);

create table if not exists public.ingredientes (
  id uuid primary key default gen_random_uuid(),
  restaurante_id uuid not null references public.restaurantes(id) on delete cascade,
  nome text not null,
  unidade text not null,
  preco_compra numeric(10,2) not null,
  rendimento numeric(10,3) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.fichas (
  id uuid primary key default gen_random_uuid(),
  restaurante_id uuid not null references public.restaurantes(id) on delete cascade,
  nome text not null,
  porcao text not null,
  preco_venda numeric(10,2),
  created_at timestamptz not null default now()
);

create table if not exists public.ficha_ingredientes (
  id uuid primary key default gen_random_uuid(),
  ficha_id uuid not null references public.fichas(id) on delete cascade,
  ingrediente_id uuid not null references public.ingredientes(id) on delete cascade,
  quantidade numeric(10,3) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.cmv_registros (
  id uuid primary key default gen_random_uuid(),
  restaurante_id uuid not null references public.restaurantes(id) on delete cascade,
  periodo daterange not null,
  faturamento numeric(12,2) not null,
  custo_compras numeric(12,2) not null,
  estoque_inicial numeric(12,2) not null,
  estoque_final numeric(12,2) not null,
  created_at timestamptz not null default now()
);

alter table public.restaurantes enable row level security;
alter table public.ingredientes enable row level security;
alter table public.fichas enable row level security;
alter table public.ficha_ingredientes enable row level security;
alter table public.cmv_registros enable row level security;

create policy "restaurante_owner" on public.restaurantes
for all using (auth.uid() = user_id);

create policy "ingrediente_owner" on public.ingredientes
for all using (
  exists (
    select 1 from public.restaurantes r
    where r.id = restaurante_id and r.user_id = auth.uid()
  )
);

create policy "ficha_owner" on public.fichas
for all using (
  exists (
    select 1 from public.restaurantes r
    where r.id = restaurante_id and r.user_id = auth.uid()
  )
);

create policy "ficha_ingrediente_owner" on public.ficha_ingredientes
for all using (
  exists (
    select 1
    from public.fichas f
    join public.restaurantes r on r.id = f.restaurante_id
    where f.id = ficha_id and r.user_id = auth.uid()
  )
);

create policy "cmv_owner" on public.cmv_registros
for all using (
  exists (
    select 1 from public.restaurantes r
    where r.id = restaurante_id and r.user_id = auth.uid()
  )
);
