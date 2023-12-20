import { MaoYanCity } from '@myTypes/city';
import { getPopularCitys } from '@utils/config';

export function getHeaderCity() {
  const headerCitys: MaoYanCity.HeaderCityItem[] = [];
  /** 当前定位 */

  headerCitys.push({
    title: '5cd2c2773b52f33719a3f334c313b05a',
    data: [
      {
        id: 30,
        nm: '深圳',
        py: 'shenzhen',
        rank: 'A',
        acronym: 'sz',
        chineseFullnm: '深圳市',
        position: {
          lat: 22.551918,
          lng: 113.937987,
        },
      },
    ],
  });
  /** 最近访问 */
  /** 热门城市 */
  const popularCitys = getPopularCitys();
  if (popularCitys) {
    headerCitys.push({ title: '46e46bb5ee9cfb9d4ffc8dbf29310445', data: popularCitys });
  }

  return headerCitys;
}
