import game from '../';
import { getRandom, nod, NOD_RULES } from '../helpers';

const rightAnswer = (a, b) => String(nod(a, b));

const findNod = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const question = `${a} ${b}`;
  const answer = rightAnswer(a, b);

  return { question, answer };
};

const run = () => {
  game(findNod, NOD_RULES);
};

export default run;
