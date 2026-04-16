# Ficha Lucrativa

SaaS em **Next.js 14** para gestão de fichas técnicas, CMV e precificação para restaurantes, lanchonetes e hamburguerias.

## Stack
- Next.js 14 + App Router + TypeScript
- Tailwind CSS
- Supabase (Auth + PostgreSQL)
- Stripe (assinatura)
- OpenAI API (sugestões inteligentes)

## Rodando localmente

1. Instale dependências:
```bash
npm install
```
2. Copie variáveis de ambiente:
```bash
cp .env.example .env.local
```
3. Preencha as chaves do Supabase, Stripe e OpenAI no `.env.local`.
4. Rode o projeto:
```bash
npm run dev
```
5. Abra http://localhost:3000

## Supabase (schema)
- Migration inicial: `supabase/migrations/202604160001_initial_schema.sql`
- Para aplicar com Supabase CLI:
```bash
supabase db push
```

## Rotas
- `/` landing page
- `/auth/login` e `/auth/register`
- `/dashboard`
- `/ingredientes`
- `/fichas`
- `/cardapio`
- `/cmv`
- `/api/openai/sugestoes`
- `/api/stripe/checkout`

## Deploy Vercel
1. Crie um novo projeto na Vercel conectando o repositório `fichalucrativa`.
2. Defina as mesmas variáveis do `.env.example` em **Project Settings > Environment Variables**.
3. Configure domínio customizado em **Domains**.

## Email gratuito no domínio
Opções comuns de plano gratuito:
- **Zoho Mail (Free)**: até 5 usuários em domínio próprio.
- **Cloudflare Email Routing**: roteia emails para uma caixa existente (Gmail/Outlook), sem inbox próprio.
- **ImprovMX (Free)**: forwarding para uma caixa já existente.

Passo geral:
1. Escolha provedor e adicione domínio.
2. Configure registros **MX**, **SPF**, **DKIM** no DNS.
3. Aguarde propagação e valide envio/recebimento.

## Próximos passos sugeridos
- Implementar CRUD real com Server Actions + Supabase.
- Adicionar proteção de rotas privadas por sessão.
- Integrar webhook Stripe para controle de assinatura ativa.
