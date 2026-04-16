import Link from 'next/link';
import { Button } from '@/components/button';

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-12">
      <p className="mb-2 text-sm font-semibold uppercase text-brand-700">SaaS para Food Service</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ficha Lucrativa</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Controle ingredientes, monte fichas técnicas e precifique com margem saudável em minutos.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/auth/register">
          <Button>Começar agora</Button>
        </Link>
        <Link href="/auth/login" className="rounded-lg border px-4 py-2 font-medium">
          Já tenho conta
        </Link>
      </div>
    </main>
  );
}
