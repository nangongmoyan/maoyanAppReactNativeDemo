import { isNil } from 'lodash';

export function convertPrice(price: string) {
  if (isNil(price) || price === '') return { integer: '', decimal: '', available: false };
  price = price.includes('.') ? price.padEnd(5, '0') : `${price}.`.padEnd(5, '0');
  return {
    available: true,
    decimal: price.slice(-3),
    integer: price.slice(0, price.length - 3),
  };
}
