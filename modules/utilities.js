function formatNumber(number) {
  let numberSplit = Number.parseFloat(number).toFixed(2).split('');
  let index = -6;
  let countCommas = 0;
  while (number / 1000 >= 1) {
    numberSplit.splice(index-countCommas, 0, ',');
    countCommas++;
    index -= 3;
    number /= 1000;
  }
  return numberSplit.join('');
}

export default formatNumber;