export function moneyFormatter(number) {
  const moneyFormatter = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2
  });
  return moneyFormatter.format(number);
}
