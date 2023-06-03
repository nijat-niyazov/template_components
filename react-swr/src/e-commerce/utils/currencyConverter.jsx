export const convertCurrency = price => {
  let formatter = new Intl.NumberFormat('es-US', {
    currency: 'USD',
    style: 'currency',
  });

  return formatter.format(price);
};
