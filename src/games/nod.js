import readlineSync from 'readline-sync';
import game from '../';
import { getRandom, nod, NOD_RULES } from '../helpers';

const rightAnswer = (a, b) => String(nod(a, b));

const findNod = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  console.log(`Question ${a} ${b}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer(a, b)) {
    return 'right';
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(a, b)}.`);
  return 'wrong';
};

const run = () => {
  game(NOD_RULES, findNod, 3);
};

export default run;
