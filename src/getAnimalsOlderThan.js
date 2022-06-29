const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let statement = '';
  data.species.forEach((species) => {
    if (species.name === animal) {
      statement = species.residents.every((resident) => (resident.age >= age));
    }
  });
  return statement;
}
console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
