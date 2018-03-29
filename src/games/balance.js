import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandom } from '../helpers';
import readlineSync from 'readline-sync';

const rules = 'Balance the given number.';

const checkBalance = (unbalance) => {
  const first = unbalance[0];
  const last = unbalance[unbalance.length - 1];
  return last - first === 1;
};

const getBalance = (unbalance) => {
  const iter = (cur, acc) => {
    console.log(cur, acc);
    let current = +acc[cur];
    let next = +acc[cur + 1];
    if (cur === unbalance.length - 1) {
      console.log('дошли до конца');
      if (checkBalance(acc.join(''))) {
        console.log('итог');
        return acc;
      }
      iter(0, acc);
    }
    if (current - next > 0) {
      current -= 1;
      acc[cur] = current;
      next += 1;
      acc[cur + 1] = next;
      return iter(cur, acc);
    } else if (current - next < -1) {
      current += 1;
      acc[cur] = current;
      next -= 1;
      acc[cur + 1] = next;
      return iter(cur, acc);
    }
    const a = readlineSync.question("Ff");
    return iter(cur + 1, acc);
  };

  return iter(0, unbalance.split(''));
};

console.log(getBalance('215'));

const generate = () => {
  const getUnbalance = (num) => {
    if (!checkBalance(num)) return String(num);
    return getUnbalance((getRandom(11, 9999)));
  };
  const unbalanceNumber = getUnbalance(getRandom(11, 9999));
  return cons(unbalanceNumber, getBalance(unbalanceNumber));
};

const run = () => {
  game(generate, rules);
};

export default run;
