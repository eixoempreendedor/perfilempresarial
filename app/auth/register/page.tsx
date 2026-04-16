'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { supabaseBrowser } from '@/lib/supabase';
import { Button } from '@/components/button';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeRestaurante, setNomeRestaurante] = useState('');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabaseBrowser().auth.signUp({
      email,
      password: senha,
      options: { data: { nome_restaurante: nomeRestaurante } }
    });

    setMsg(error ? error.message : 'Cadastro realizado! Verifique seu e-mail.');
  }

  return (
    <main className="mx-auto max-w-md p-4 py-16">
      <h1 className="mb-6 text-2xl font-bold">Criar conta</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="w-full rounded-lg border p-2" placeholder="Nome do restaurante" value={nomeRestaurante} onChange={(e) => setNomeRestaurante(e.target.value)} />
        <input className="w-full rounded-lg border p-2" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-lg border p-2" placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {msg && <p className="text-sm text-slate-600">{msg}</p>}
        <Button type="submit" className="w-full">Criar conta</Button>
      </form>
      <p className="mt-4 text-sm">Já tem conta? <Link className="text-brand-700" href="/auth/login">Entrar</Link></p>
    </main>
  );
}
