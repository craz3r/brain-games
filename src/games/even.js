import readlineSync from 'readline-sync';
import game from '..';
import { getRandom, EVEN_RULES } from '../helpers';

const rightAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const even = () => {
  const question = getRandom(0, 100);
  console.log(`Question ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer(question)) {
    return 'right';
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(question)}.`);
  return 'wrong';
};

const run = () => {
  game(EVEN_RULES, even, 3);
};

export default run;
