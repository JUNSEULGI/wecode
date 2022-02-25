function getEven() {
  const evenNums = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
    }
  }
  return evenNums;
}
