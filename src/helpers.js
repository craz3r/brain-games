export const EVEN_RULES = 'Answer "yes" if number is even otherwise answer "no".';
export const CALC_RULES = 'What is the result of the expression?';
export const NOD_RULES = 'Find the greatest common divisor of given numbers.';

export const getRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const nod = (a, b) => {
  if (a < 0 && b < 0) {
    return nod(-a, -b);
  } else if (a < 0) {
    return nod(-a, b);
  } else if (b < 0) {
    return nod(a, -b);
  }
  const iter = (current, acc) => {
    if (current > a || current > b) return acc;
    if (!(a % current) && !(b % current)) return iter(current + 1, current);
    return iter(current + 1, acc);
  };
  return iter(1, 0);
};
