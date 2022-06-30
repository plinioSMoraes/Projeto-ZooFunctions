const data = require('../data/zoo_data');

function filterAllAnimals(animal) {
  const objects = {};
  data.species.forEach((specie) => {
    objects[specie.name] = specie.residents.length;
  });
  return objects;
}
function animalsByName(animal, allAnimals) {
  const statement = Object.prototype.hasOwnProperty.call(allAnimals, animal.specie);
  if (statement) return allAnimals[animal.specie];
}
function animalsBySex(animal) {
  let sexCounts = 0;
  data.species.forEach((specie) => {
    specie.residents.forEach((resident) => {
      if (specie.name === animal.specie && resident.sex === animal.sex) sexCounts += 1;
    });
  });
  return sexCounts;
}
function countAnimals(animal) {
  const allAnimals = filterAllAnimals(animal);
  if (!animal) return allAnimals; // retorna a todas especies e suas quantidades
  if (animal.specie && !animal.sex) return animalsByName(animal, allAnimals); // retorna a quantidade de animais por especie
  return animalsBySex(animal); // contas os animais por sexo
}

console.log(countAnimals({ specie: 'bears', sex: 'male' }));
module.exports = countAnimals;
