export function formatValue(value: number | null, options: Intl.NumberFormatOptions = {}): string {
  return value === null || !Number.isFinite(value)
    ? "Não disponível"
    : new Intl.NumberFormat("pt-BR", options).format(value);
}
