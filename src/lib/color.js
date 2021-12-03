/**
 * Check if a color follows HEX format
 * @param {string} color
 * @returns  boolean
 */
const isHexColor = (color) => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;

  return !!hexRegex.test(color);
};

/**
 * Convert HEX to rgb or rgba (based on opts)
 * @param {string} color  HEX Color
 * @param {Object} opts
 * {
 *   opacity?: number
 * }
 * @returns
 */
export function hexToRGB(color, opts = {}) {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;

  if (!isHexColor(color)) {
    return undefined;
  }

  let rgbHex = color.substring(1).match(/.{1,2}/g);
  const rgb = [
    parseInt(rgbHex[0], 16),
    parseInt(rgbHex[1], 16),
    parseInt(rgbHex[2], 16),
  ].join(',');

  const { opacity } = opts;
  if (opacity) {
    return `rgba(${rgb},${opacity})`;
  }
  return `rgb(${rgb})`;
}

/**
 * Extract r,g,b from a rgbColor
 * @param {string} rgbColor  e.g rgb(0,0,0)
 * @returns
 * {
 *   r: number,
 *   g: number,
 *   b: number
 * }
 */
const extractRGBFromColor = (rgbColor) => {
  const res = rgbColor.replace(/\s/g, '').match(/^rgb?\((\d+),(\d+),(\d+)\)?/i);
  if (!res) return {};

  const [_, r, g, b] = res;
  return { r, g, b };
};

/**
 * Return the constrast text color basing on the background color
 * @param {string} bgColor
 * @returns
 */
export function getTextColorByBackgroundColor(bgColor) {
  if (isHexColor(bgColor)) {
    bgColor = hexToRGB(bgcolor);
  }
  const { r, g, b } = extractRGBFromColor(bgColor);

  const textColor = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';
  return textColor;
}
