import { cons } from 'hexlet-pairs';
import executeGame from '..';
import { getRandom } from '../helpers';

const rules = 'Is this number prime?';

const isPrime = (number) => {
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
    const primeFlag = isPrime(question);
    return primeFlag ? 'yes' : 'no';
  };

  const question = getRandom(2, 99);
  const answer = getAnswer(question);

  return cons(question, answer);
};

const run = () => {
  executeGame(generate, rules);
};

export default run;
