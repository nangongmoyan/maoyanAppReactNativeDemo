import { isNil } from 'lodash';

export function convertPrice(price: string) {
  if (isNil(price)) return { integer: '', decimal: '' };
  price = price.includes('.') ? price.padEnd(5, '0') : `${price}.`.padEnd(5, '0');
  return {
    decimal: price.slice(-3),
    integer: price.slice(0, price.length - 3),
  };
}
