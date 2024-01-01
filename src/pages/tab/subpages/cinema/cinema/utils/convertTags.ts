import { CinemaTag } from 'maoyan-request/dist/types';

export function convertTags(tag: CinemaTag) {
  let tags = [];
  for (const key in tag) {
    const value = tag[key];
    if (value) {
      switch (key) {
        case 'allowRefund':
          tags.push({ label: '退', color: '#148aff' });
          break;
        case 'endorse':
          tags.push({ label: '改签', color: '#148aff' });
          break;
        case 'vipTag':
          tags.push({ label: value, color: '#148aff' });
          break;
        case 'snack':
          tags.push({ label: '小吃', color: '#148aff' });
          break;
        case 'sell':
          tags.push({ label: '券包', color: '#148aff' });
          break;
        case 'hallType':
          tags = tags.concat(value.slice(0, 3).map((item) => ({ label: item, color: '#148aff' })));
          // tags.push({ label: '券包', color: '#148aff' });
          break;
      }
    }
  }

  return tags;
}
