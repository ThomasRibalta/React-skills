const intl = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export const priceConverter = (price) => {
  return intl.format(price);
};

export default function useCurrency(num) {
  return priceConverter(num);
}
