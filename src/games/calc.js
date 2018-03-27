import readlineSync from 'readline-sync';
import game from '..';
import { getRandom, CALC_RULES } from '../helpers';

const rightAnswer = (sign, a, b) => {
  switch (sign) {
    case '*':
      return String(a * b);
    case '+':
      return String(a + b);
    default:
      return String(a - b);
  }
};

const sign = (s) => {
  switch (s) {
    case 0:
      return '*';
    case 1:
      return '+';
    default:
      return '-';
  }
};

const calc = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const s = sign(getRandom(0, 2));
  const question = `${a} ${s} ${b}`;
  console.log(`Question ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer(s, a, b)) {
    return 'right';
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(s, a, b)}.`);
  return 'wrong';
};

const run = () => {
  game(CALC_RULES, calc, 3);
};

export default run;
