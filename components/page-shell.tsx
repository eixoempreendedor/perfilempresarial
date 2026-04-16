import { ReactNode } from 'react';
import { Navbar } from './navbar';

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl p-4">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        {children}
      </main>
    </div>
  );
}
