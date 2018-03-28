import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const execGame = (game, rules) => {
  console.log('Welcome to Brain Games!');
  if (rules) console.log(`${rules} \n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (game) {
    let count = 0;
    while (count < 3) {
      const attempt = game();
      const question = car(attempt);
      const rightAnswer = cdr(attempt);
      console.log(`Question ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== rightAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
        console.log(`Let's try again ${name}`);
        return;
      }
      console.log('Correct');
      count += 1;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default execGame;
