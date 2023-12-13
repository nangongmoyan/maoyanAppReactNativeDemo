interface ChartWidthType {
  capitalWidth: number;
  lowerWidth: number;
  spaceWidth: number;
  numberWidth: number;
  chineseWidth: number;
}

/**
 *
 * @param char
 * @param charWidth
 * @returns
 */
function getCharWidth(char: string, charWidth: ChartWidthType) {
  let width;
  const { capitalWidth, lowerWidth, numberWidth, spaceWidth, chineseWidth } = charWidth;

  if (/[A-Z]/.test(char)) {
    /** 大写字母 */
    width = capitalWidth;
  } else if (/([a-z]|[\u0021-\u002F])/.test(char)) {
    /** 小写字母 和部分常见符号 */
    width = lowerWidth;
  } else if (/\d/.test(char)) {
    /** 数字 */
    width = numberWidth;
  } else if (/\s/.test(char)) {
    /** 空格 */
    width = spaceWidth;
  } else {
    /** 汉字或其他 */
    width = chineseWidth;
  }

  return width;
}

/**
 *
 * @param value
 * @param fontSize
 * @returns
 */
function getStringWidth(value: string, fontSize: number) {
  const scale = fontSize / 17;
  const lowerWidth = 8.6 * scale;
  const spaceWidth = 4 * scale;
  const capitalWidth = 11 * scale;
  const numberWidth = 9.9 * scale;
  const chineseWidth = 17.3 * scale;

  const width = Array.from(value).reduce((sum, char) => {
    return sum + getCharWidth(char, { capitalWidth, lowerWidth, spaceWidth, numberWidth, chineseWidth });
  }, 0);

  return Math.ceil(width / fontSize) * fontSize;
}

/**
 * 简单的计算出行数
 * @param value 要展示的字符串
 * @param fontSize 字体大小
 * @param width 展示容器的宽度
 * @returns 字符串自然排列的行数
 */
function getNumberOfLines(value: string, fontSize: number, width: number) {
  if (!value) return 0;
  return Math.ceil(getStringWidth(value, fontSize) / width);
}

export default getNumberOfLines;
