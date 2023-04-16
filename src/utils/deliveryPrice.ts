function convertToMoney(price: number) {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatPrice(value: number) {
  const x = convertToMoney(value)
  return x.slice(3)
}
