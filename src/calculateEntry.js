const data = require('../data/zoo_data');

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

module.exports = { calculateEntry, countEntrants };
