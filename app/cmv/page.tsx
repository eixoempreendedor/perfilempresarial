import { Card } from '@/components/card';
import { PageShell } from '@/components/page-shell';

function calcularCMV(faturamento: number, compras: number, estoqueInicial: number, estoqueFinal: number) {
  const consumo = compras + estoqueInicial - estoqueFinal;
  return (consumo / Math.max(faturamento, 1)) * 100;
}

export default function CMVPage() {
  const cmv = calcularCMV(40000, 12000, 5000, 3500);

  return (
    <PageShell title="CMV do período">
      <Card>
        <p className="text-sm text-slate-600">Resultado do período com base em faturamento, compras e estoques.</p>
        <p className="mt-3 text-2xl font-bold">CMV: {cmv.toFixed(1)}%</p>
      </Card>
    </PageShell>
  );
}
