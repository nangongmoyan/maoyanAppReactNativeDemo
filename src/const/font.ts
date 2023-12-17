import { MaoYanUI } from '@myTypes/ui';
import { isiOS } from '@utils/screen';

export const weights: Record<MaoYanUI.Weight, MaoYanUI.FontWeight> = {
  light: '200',
  normal: '400',
  medium: isiOS ? '500' : '700',
  semibold: isiOS ? '600' : '700',
  bold: '800',
};
