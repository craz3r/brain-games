import { cons } from 'hexlet-pairs';
import executeGame from '..';
import { getRandom } from '../helpers';

const rules = 'What number is missing in this progression?';


const generateProgression = (first, d) => {
  const iter = (n, acc) => {
    if (n === 9) return acc;
    acc.push(acc[n] + d);
    return iter(n + 1, acc);
  };

  return iter(0, [first]);
};

const generate = () => {
  const getHoleProgression = (idx, progression) => progression.map((val, id) => {
    const hole = idx === id;
    return hole ? '..' : val;
  });
  const progression = generateProgression(getRandom(0, 20), getRandom(1, 15));
  const holeIdx = getRandom(0, 9);
  const question = getHoleProgression(holeIdx, progression).join(' ');
  const answer = String(progression[holeIdx]);

  return cons(question, answer);
};

console.log(generate());

const run = () => {
  executeGame(generate, rules);
};

export default run;
