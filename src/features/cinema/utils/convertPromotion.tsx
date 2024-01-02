import { Promotion } from 'maoyan-request/dist/types';

export function convertPromotion(promotion: Promotion) {
  const promotions = [];
  for (const key in promotion) {
    const value = promotion[key];
    if (value) {
      switch (key) {
        case 'couponPromotionTag':
          promotions.push({ label: '券', value, bgColor: '#38c5a9' });
          break;
        case 'merchantActivityTag':
          promotions.push({ label: '促', value, bgColor: '#f57571' });
          break;
        case 'platformActivityTag':
          promotions.push({ label: '惠', value, bgColor: '#f29f2f' });
          break;
        case 'cardPromotionTag':
          promotions.push({ label: '卡', value, bgColor: '#62b8f4' });
          break;
      }
    }
  }

  return promotions;
}
