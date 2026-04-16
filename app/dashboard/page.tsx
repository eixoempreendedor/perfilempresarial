import { Card } from '@/components/card';
import { PageShell } from '@/components/page-shell';

export default function DashboardPage() {
  return (
    <PageShell title="Visão geral do restaurante">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {['Faturamento (30d)', 'CMV médio', 'Itens no cardápio', 'Margem média'].map((kpi) => (
          <Card key={kpi}>
            <p className="text-sm text-slate-500">{kpi}</p>
            <p className="mt-2 text-2xl font-bold">—</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
