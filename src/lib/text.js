/*
  formatNumberWithCommas:
  ex:
    1000    ->     1,000
    1000000 -> 1,000,000
*/
export const formatNumberWithCommas = (x) => {
  if (!x && x !== 0) {
    return '';
  }
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const fortmatTextPercentage = (x) => {
  return `${x}%`;
};
