import readlineSync from 'readline-sync';

const execGame = (rules, game, questions = 3) => {
  console.log('Welcome to Brain Games!');
  if (rules) console.log(`${rules} \n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (game) {
    let count = 0;
    while (count < questions) {
      const result = game();
      if (result === 'wrong') {
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
