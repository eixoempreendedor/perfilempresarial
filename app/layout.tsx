import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ficha Lucrativa',
  description: 'Gestão de fichas técnicas e precificação para food service'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
