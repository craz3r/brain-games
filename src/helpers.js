export const getRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGCD(b, a % b);
};
