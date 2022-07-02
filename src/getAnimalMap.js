const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

function getResidents(residents) {
  const residentsArr = [];
  residents.forEach((resident) => {
    residentsArr.push(resident.name);
  });
  return residentsArr;
}
function getMapObj(filters) {
  const animals = data.species;
  const mapObj = {};
  locations.forEach((location) => {
    const locationArr = [];
    animals.forEach((animal) => {
      const animalObj = {};
      const residentArr = getResidents(animal.residents);
      if (animal.location === location && residentArr.length !== 0) {
        animalObj[animal.name] = residentArr;
        locationArr.push(animalObj);
      }
    });
    mapObj[location] = locationArr;
  });
  return mapObj;
}
function getAnimalLocations() {
  const animals = data.species;
  const mapObj = {};
  locations.forEach((location) => {
    const animalArr = [];
    animals.forEach((animal) => {
      if (animal.location === location) {
        animalArr.push(animal.name);
      }
    });
    mapObj[location] = animalArr;
  });
  // console.log(mapObj);
  return mapObj;
}
function sort(mapObj) { // Organiza o array de animais
  Object.values(mapObj).forEach((obj) => {
    obj.forEach((animal) => {
      Object.values(animal)[0].sort();
    });
  });
  return mapObj;
}
function getAllAnimalsBySex(sex) {
  const animals = data.species;
  const arrAnimals = [];
  animals.forEach((animal) => {
    animal.residents.forEach((resident) => {
      if (resident.sex === sex) arrAnimals.push(resident.name);
    });
  });
  return arrAnimals; // Array com animais do sexo especificado
}
function removeAnimal(animalArr, targetArr) {
  animalArr.forEach((animal) => {
    if (targetArr.includes(animal)) {
      targetArr.splice(targetArr.indexOf(animal), 1);
    }
  });
  return targetArr;
}
function sortESex(mapObj, sex) {
  const animalArrSex = getAllAnimalsBySex(sex);
  Object.values(mapObj).forEach((obj) => {
    obj.forEach((animal) => {
      Object.values(animal)[0] = removeAnimal(animalArrSex, Object.values(animal)[0]);
    });
  });
  return mapObj;
}
function changeSex(sex) {
  if (sex === 'male') {
    return 'female';
  }
  return 'male';
}
function filteredObj(filters) {
  let animalsMap = getMapObj(filters);
  const sex = changeSex(filters.sex);
  if (filters.sorted === true) {
    if (filters.sex === 'male' || filters.sex === 'female') {
      animalsMap = sort(animalsMap);
      animalsMap = sortESex(animalsMap, sex);
      return animalsMap;
    }
    return sort(animalsMap);
  }
  if (!filters.sex) return animalsMap;
  return sortESex(animalsMap, sex);
}
function getAnimalMap(options) {
  if (options === undefined) {
    return getAnimalLocations();
  }
  const { includeNames } = options;
  if (!includeNames) {
    return getAnimalLocations();
  }
  return filteredObj(options);
}

console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female', sorted: true })));

module.exports = getAnimalMap;
