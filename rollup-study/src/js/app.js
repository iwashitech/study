import add from './modules/add';
import and from './modules/and';

const number1 = 400;
const number2 = 600;
const total = add(number1, number2);
const totaltxt = and(number1, number2);

console.log(total);
console.log(totaltxt);
