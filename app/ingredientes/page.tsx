import { Card } from '@/components/card';
import { PageShell } from '@/components/page-shell';

const ingredientes = [
  { nome: 'Pão brioche', unidade: 'un', preco: 1.7, rendimento: 1 },
  { nome: 'Blend bovino', unidade: 'kg', preco: 35, rendimento: 0.9 }
];

export default function IngredientesPage() {
  return (
    <PageShell title="Ingredientes">
      <Card>
        <p className="mb-4 text-sm text-slate-600">Cadastro e gestão de custo dos ingredientes.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">Nome</th><th>Unidade</th><th>Preço compra</th><th>Rendimento</th>
              </tr>
            </thead>
            <tbody>
              {ingredientes.map((item) => (
                <tr key={item.nome} className="border-b">
                  <td className="p-2">{item.nome}</td><td>{item.unidade}</td><td>R$ {item.preco.toFixed(2)}</td><td>{item.rendimento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageShell>
  );
}
