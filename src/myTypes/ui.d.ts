import { ITextProps } from 'native-base';
import { TextStyle, ViewStyle } from 'react-native';

declare namespace MaoYanUI {
  type FontWeight = TextStyle['fontWeight'];
  /** 字重 */
  type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

  type RowItemType = 'switch' | 'normal' | 'hidden';

  interface ShadowBox {
    boxWidth?: number; //xxxxx
    boxHeight?: number; //
    boxStyle?: object;
    boxBorderRadius?: number;
    boxBackgroundColor?: string;
  }

  interface SvgIcon {
    fills: string[]; //
    size: number;
    paths: string[];
    viewBox?: string;
    style?: ViewStyle;
  }

  interface RowItem {
    titleML?: number;
    itemTitle: string;
    itemHeight?: number;
    itemType?: RowItemType;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    showItemSeparator?: boolean;
    rightExtraTitle?: React.ReactNode;
    itemStyle?: ViewStyle;
    itemTitleStyle?: ViewStyle;
    straightLineWidth?: number;
    straightLineAlignItems?: FlexAlign;
    rightValue?: React.ReactNode;
  }

  interface NGTextProps extends ITextProps {
    weight?: Weight;
  }
}
