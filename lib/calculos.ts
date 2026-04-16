export type IngredienteFicha = {
  preco_compra: number;
  rendimento: number;
  quantidade: number;
};

export function calcularCustoFicha(ingredientes: IngredienteFicha[]) {
  return ingredientes.reduce((acc, item) => {
    const custoUnidadeUtil = item.preco_compra / Math.max(item.rendimento, 1);
    return acc + custoUnidadeUtil * item.quantidade;
  }, 0);
}

export function calcularPrecoSugerido(custoFicha: number, margemAlvoPercentual: number) {
  const margem = Math.min(Math.max(margemAlvoPercentual, 1), 99) / 100;
  return custoFicha / (1 - margem);
}

export function corSemaforoMargem(margemPercentual: number) {
  if (margemPercentual >= 65) return 'bg-emerald-100 text-emerald-700';
  if (margemPercentual >= 45) return 'bg-amber-100 text-amber-700';
  return 'bg-rose-100 text-rose-700';
}
