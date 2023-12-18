declare namespace MaoYanCity {
  /** 城市首字母 */
  type Rank = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'W' | 'X' | 'Y' | 'Z';

  interface Position {
    lat: number; //
    lng: number; //
  }
  interface CityItem {
    id: number; //城市id
    nm: string; // 城市名称
    py: string; // 城市拼音
    rank: Rank; // 排行
    acronym: string; //
    chineseFullnm: string; // 中文全称
    position: Position; // 位置信息
  }

  /** */
  type OriginCity = {
    [key in Rank]: CityItem[];
  };
}
