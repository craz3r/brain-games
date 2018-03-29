import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandom } from '../helpers';

const rules = 'Balance the given number.';

const checkBalance = (unbalance) => {
  let changeDif = 0;
  const iter = (acc) => {
    if (changeDif > 1) return false;
    if (acc.length === 1) return true;
    if (acc[1] - acc[0] > 1 || acc[1] - acc[0] < 0) return false;
    if (acc[1] - acc[0] === 1) changeDif += 1;
    return iter(acc.substr(1));
  };
  return iter(unbalance);
};

const getBalance = (unbalance) => {
  const iter = (n, acc, k) => {
    if (checkBalance(acc.join(''))) return acc.join('');

    const cur = +acc[n];
    const next = +acc[k];

    if (next - cur > 1) {
      acc[n] = +acc[n] + 1;
      acc[k] = +acc[k] - 1;
      return iter(n, acc, k);
    }

    if (next - cur < 0) {
      acc[n] = +acc[n] - 1;
      acc[k] = +acc[k] + 1;
      return iter(n, acc, k);
    }

    if (n === acc.length - 2) {
      return iter(0, acc, 1);
    }


    if (k === acc.length - 1) return iter(n + 1, acc, n + 2);

    return iter(n, acc, k + 1);
  };

  return iter(0, unbalance.split(''), 1);
};

const generate = () => {
  const getUnbalance = (num) => {
    if (!checkBalance(String(num))) return String(num);
    return getUnbalance((getRandom(10, 1000)));
  };
  const unbalanceNumber = getUnbalance(getRandom(10, 1000));
  const balanceNumber = getBalance(unbalanceNumber);
  return cons(unbalanceNumber, balanceNumber);
};

const run = () => {
  game(generate, rules);
};

export default run;
