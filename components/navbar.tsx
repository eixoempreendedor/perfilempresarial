import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ingredientes', label: 'Ingredientes' },
  { href: '/fichas', label: 'Fichas' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/cmv', label: 'CMV' }
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto p-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-md px-3 py-1 text-sm hover:bg-slate-100">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
