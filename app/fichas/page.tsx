import { Card } from '@/components/card';
import { PageShell } from '@/components/page-shell';
import { calcularCustoFicha, calcularPrecoSugerido } from '@/lib/calculos';

export default function FichasPage() {
  const custo = calcularCustoFicha([
    { preco_compra: 1.7, rendimento: 1, quantidade: 1 },
    { preco_compra: 35, rendimento: 0.9, quantidade: 0.18 }
  ]);

  const precoSugerido = calcularPrecoSugerido(custo, 65);

  return (
    <PageShell title="Fichas técnicas">
      <Card>
        <p className="text-sm text-slate-600">Monte sua ficha com porção, custo calculado e preço sugerido.</p>
        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Ficha:</strong> Smash Burguer 160g</p>
          <p><strong>Custo calculado:</strong> R$ {custo.toFixed(2)}</p>
          <p><strong>Preço sugerido (margem alvo 65%):</strong> R$ {precoSugerido.toFixed(2)}</p>
        </div>
      </Card>
    </PageShell>
  );
}
