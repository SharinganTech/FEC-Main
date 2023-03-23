module.exports = {
  arrayOfQuantities: (number) => {
    const result = [];
    for (let i = 1; i <= number; i += 1) {
      result.push(i);
    }
    return result;
  },
};
