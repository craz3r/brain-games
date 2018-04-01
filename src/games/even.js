import { cons } from 'hexlet-pairs';
import executeGame from '..';
import { getRandom } from '../helpers';

const rules = 'Answer "yes" if number is even otherwise answer "no".';

const rightAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const generate = () => {
  const question = getRandom(0, 100);
  const answer = rightAnswer(question);
  return cons(question, answer);
};

const run = () => {
  executeGame(generate, rules);
};

export default run;
