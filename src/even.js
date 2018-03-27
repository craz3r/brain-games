import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const brainEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number is even otherwise answer "no". \n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  let questions = 0;
  while (questions < 3) {
    const num = getRandom(0, 100);
    console.log(`Question ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const even = num % 2 === 0 ? 'yes' : 'no';
    if (even === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${even}.`);
      console.log(`Let's try again ${name}`);
      return;
    }
    questions += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
