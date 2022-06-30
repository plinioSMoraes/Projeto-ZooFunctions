const data = require('../data/zoo_data');

function oldestAnimal(animalId) {
  let age = 0;
  let animalObj = [];
  data.species.forEach((specie) => {
    if (specie.id === animalId) {
      Object.values(specie.residents).forEach((eachAnimal) => {
        if (eachAnimal.age > age) {
          animalObj = Object.values(eachAnimal);
          age = eachAnimal.age;
        }
      });
    }
  });
  return animalObj;
}
function getOldestFromFirstSpecies(id) {
  let oldAnimal = [];
  data.employees.forEach((index) => {
    if (index.id === id) {
      oldAnimal = oldestAnimal(index.responsibleFor[0]);
    }
  });
  return oldAnimal;
}

module.exports = getOldestFromFirstSpecies;
