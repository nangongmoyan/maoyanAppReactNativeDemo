import { Dimensions, PixelRatio, Platform } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

/** 设计图的宽高 */
const UI_WIDTH = 750;
const UI_HEIGHT = 1334;

/** 获取设备的像素密度 */
const pixelRatio = PixelRatio.get();

/** 获取字体大小缩放比例 */
// const fontScale = PixelRatio.getFontScale();

/** ios尺寸 */
const iosWidth = Dimensions.get('window').width;
const iosHeight = Dimensions.get('window').height;
/** android尺寸 */
const androidWidth = ExtraDimensions.get('REAL_WINDOW_WIDTH');
const androidHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT');

/** 实际设备的尺寸 */
const deviceWidth = Platform.OS === 'ios' ? iosWidth : androidWidth;
const deviceHeight = Platform.OS === 'ios' ? iosHeight : androidHeight;

/** 将一个布局尺寸(dp)转换为像素尺寸(px) */
const screenWidthPx = PixelRatio.getPixelSizeForLayoutSize(deviceWidth);
const screenHeightPx = PixelRatio.getPixelSizeForLayoutSize(deviceHeight);

/** 设置宽度 */
const adaptiveWidth = (size: number) => {
  const scaleWidth = (size * screenWidthPx) / UI_WIDTH;
  const resSize = Math.round(scaleWidth / pixelRatio);
  return resSize;
};

/** 设置高度 */
const adaptiveHeight = (size: number) => {
  const scaleHeight = (size * screenHeightPx) / UI_HEIGHT;
  const resSize = Math.round(scaleHeight / pixelRatio);
  return resSize;
};

/** 设置宽度的百分比 */
const vw = (percentageWidth: number) => {
  return Math.round(deviceWidth * (percentageWidth / 100));
};

/** 设置高度的百分比 */
const vh = (percentageHeight: number) => {
  return Math.round(deviceHeight * (percentageHeight / 100));
};

/** 设置字体大小 */
const adaptiveFont = (size: number) => {
  if (deviceWidth < 360) {
    return size - 1;
  }
  // iphone 5
  else if (deviceHeight < 667) {
    return size;
  }
  // iphone 6-6s
  else if (deviceHeight >= 667 && deviceHeight <= 735) {
    return size + 1;
  } else if (deviceHeight >= 735) {
    return size + 2;
  }
  return size;
};

export { adaptiveFont, adaptiveHeight, adaptiveWidth, deviceHeight, deviceWidth, vh, vw };
