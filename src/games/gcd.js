import { cons } from 'hexlet-pairs';
import game from '../';
import { getRandom, getGCD } from '../helpers';

const rightAnswer = (a, b) => String(getGCD(a, b));

const rules = 'Find the greatest common divisor of given numbers.';

const generate = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const question = `${a} ${b}`;
  const answer = rightAnswer(a, b);

  return cons(question, answer);
};

const run = () => {
  game(generate, rules);
};

export default run;
