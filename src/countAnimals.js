const data = require('../data/zoo_data');

function noFilter() {
  const animals = {};
  data.species.forEach(({ name, residents }) => {
    animals[name] = residents.length;
  });
  return animals;
}

function filterBySpecies(id) {
  const { specie } = id;
  return data.species.find((animal) => animal.name === specie).residents;
}

function filterBySpecAndSex(id) {
  const animal = filterBySpecies(id);
  let quantity = 0;
  animal.forEach(({ sex }) => {
    if (id.sex === sex) quantity += 1;
  });
  return quantity;
}

function countAnimals(animal) {
  if (animal === undefined) return noFilter();
  if (animal.sex === undefined) return filterBySpecies(animal).length;
  return filterBySpecAndSex(animal);
}

module.exports = countAnimals;
