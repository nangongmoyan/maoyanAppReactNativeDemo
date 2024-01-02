import { CinemaTag } from 'maoyan-request/dist/types';

export function convertTags(tag: CinemaTag) {
  let tags = [];
  for (const key in tag) {
    const value = tag[key];
    if (value) {
      switch (key) {
        case 'allowRefund':
          tags.push({ label: '退', color: '#148aff', weight: 1 });
          break;
        case 'endorse':
          tags.push({ label: '改签', color: '#148aff', weight: 2 });
          break;
        case 'vipTag':
          tags.push({ label: value, color: '#45b289', weight: 3 });
          break;
        case 'snack':
          tags.push({ label: '小吃', color: '#7e7e7e', weight: 5 });
          break;
        case 'sell':
          tags.push({ label: '券包', color: '#e5bf6e', weight: 4 });
          break;
        case 'hallType':
          tags = tags.concat(value.slice(0, 3).map((item, index) => ({ label: item, color: '#7e7e7e', weight: index + 6 })));
          // tags.push({ label: '券包', color: '#148aff' });
          break;
      }
    }
  }

  return tags.sort((a, b) => a.weight - b.weight);
}
