const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const card_map = new Map();
input[1]
  .split(' ')
  .map(n => Number(n))
  .forEach(n => {
    if (card_map.has(n)) card_map.set(n, card_map.get(n) + 1);
    else card_map.set(n, 1);
  });

const targets = input[3].split(' ').map(n => Number(n));

let answer = [];
targets.forEach(t => {
  if (card_map.has(t)) answer.push(card_map.get(t));
  else answer.push(0);
});

console.log(answer.join(' '));
