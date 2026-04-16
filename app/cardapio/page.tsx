import { Card } from '@/components/card';
import { PageShell } from '@/components/page-shell';
import { corSemaforoMargem } from '@/lib/calculos';

const produtos = [
  { nome: 'Smash Duplo', margem: 68 },
  { nome: 'X-Bacon', margem: 52 },
  { nome: 'Combo Família', margem: 39 }
];

export default function CardapioPage() {
  return (
    <PageShell title="Cardápio e semáforo de margem">
      <div className="space-y-3">
        {produtos.map((produto) => (
          <Card key={produto.nome}>
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{produto.nome}</p>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${corSemaforoMargem(produto.margem)}`}>
                Margem {produto.margem}%
              </span>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
