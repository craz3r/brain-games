export const getRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const getGCD = (a, b) => {
  if (a < 0 && b < 0) return getGCD(-a, -b);
  else if (a < 0) return getGCD(-a, b);
  else if (b < 0) return (getGCD(a, -b));
  if (b >= a) {
    return b % a ? getGCD(a, b % a) : a;
  }
  return a % b ? getGCD(a % b, b) : b;
};
