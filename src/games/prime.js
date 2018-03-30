import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandom } from '../helpers';

const rules = 'Is this number prime?';

const checkPrime = (number) => {
  const iter = (n) => {
    if (n === Math.ceil(Math.sqrt(number))) return true;
    if (number % 2 === 0) return false;
    if (number % n === 0) return false;
    return iter(n + 1);
  };
  return iter(2);
};

const generate = () => {
  const getAnswer = (question) => {
    const isPrime = checkPrime(question);
    return isPrime ? 'yes' : 'no';
  };

  const question = getRandom(2, 99);
  const answer = getAnswer(question);

  return cons(question, answer);
};

const run = () => {
  game(generate, rules);
};

export default run;
