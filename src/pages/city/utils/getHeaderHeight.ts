import { HEADER_HEIGHT, HEADER_ITEM_HEIGHT, HEADER_ITEM_MARGIN_Y, HEADER_PADDING_BOTTOM } from '../const';
import { getHeaderCity } from './getHeaderCity';

export function getHeaderHeight() {
  let height = HEADER_PADDING_BOTTOM;
  const headerCitys = getHeaderCity();

  headerCitys.forEach((ele) => {
    height += HEADER_HEIGHT;
    const row = Math.ceil(ele.data.length / 3);
    height += row * (HEADER_ITEM_HEIGHT + 2 * HEADER_ITEM_MARGIN_Y);
  });

  console.log({ height });
  return height;
}
