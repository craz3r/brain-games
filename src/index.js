import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';


const execGame = (game, rules) => {
  console.log('Welcome to Brain Games!');
  if (rules) console.log(`${rules} \n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (game) {
    const gameCicle = (n) => {
      if (n === 0) {
        console.log(`Congratulations, ${name}!`);
        return;
      }
      const qa = game();
      const question = car(qa);
      const rightAnswer = cdr(qa);
      console.log(`Question ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== rightAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
        console.log(`Let's try again ${name}`);
        return;
      }
      console.log('Correct');

      gameCicle(n - 1);
    };
    gameCicle(3);
  }
};

export default execGame;
