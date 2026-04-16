'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { supabaseBrowser } from '@/lib/supabase';
import { Button } from '@/components/button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabaseBrowser().auth.signInWithPassword({ email, password: senha });
    setErro(error?.message || '');
  }

  return (
    <main className="mx-auto max-w-md p-4 py-16">
      <h1 className="mb-6 text-2xl font-bold">Entrar na Ficha Lucrativa</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="w-full rounded-lg border p-2" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-lg border p-2" placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {erro && <p className="text-sm text-red-600">{erro}</p>}
        <Button type="submit" className="w-full">Entrar</Button>
      </form>
      <p className="mt-4 text-sm">Não tem conta? <Link className="text-brand-700" href="/auth/register">Cadastre-se</Link></p>
    </main>
  );
}
