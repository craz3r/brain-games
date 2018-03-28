import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandom } from '../helpers';

const rules = 'Balance the given number.';

const checkBalance = (unbalance) => {
  const first = unbalance[0];
  const last = unbalance[unbalance.length - 1];
  return last - first === 1;
};

const getBalance = (unbalance) => {

};

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
