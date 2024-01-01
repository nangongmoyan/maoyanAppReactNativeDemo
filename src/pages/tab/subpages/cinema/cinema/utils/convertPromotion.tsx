import { Promotion } from 'maoyan-request/dist/types';

export function convertPromotion(promotion: Promotion) {
  const promotions = [];
  for (const key in promotion) {
    const value = promotion[key];
    if (value) {
      switch (key) {
        case 'couponPromotionTag':
          promotions.push({ label: '券', value, bgColor: '#148aff' });
          break;
        case 'merchantActivityTag':
          promotions.push({ label: '促', value, bgColor: '#148aff' });
          break;
        case 'platformActivityTag':
          promotions.push({ label: '惠', value, bgColor: '#148aff' });
          break;
        case 'cardPromotionTag':
          promotions.push({ label: '卡', value, bgColor: '#148aff' });
          break;
      }
    }
  }

  return promotions;
}
