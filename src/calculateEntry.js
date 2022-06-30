const data = require('../data/zoo_data');

const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const pessoas = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) pessoas.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) pessoas.adult += 1;
    if (entrant.age >= 50) pessoas.senior += 1;
  });
  return pessoas;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  return pessoas.child * 20.99 + pessoas.adult * 49.99 + pessoas.senior * 24.99
}
// console.log(countEntrants(entradas));
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
