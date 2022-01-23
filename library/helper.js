// Convert 1000000 to 1M
export const formatNumber = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000).toFixed(1) + "B";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number;
  }
};

export const toFixedDecimal = (number, decimal) => {
  return parseFloat(number)
    .toFixed(decimal)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
