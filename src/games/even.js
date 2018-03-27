import game from '..';
import { getRandom, EVEN_RULES } from '../helpers';

const rightAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const even = () => {
  const question = getRandom(0, 100);
  const answer = rightAnswer(question);
  return { question, answer };
};

const run = () => {
  game(even, EVEN_RULES);
};

export default run;
