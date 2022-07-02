const data = require('../data/zoo_data');

function getManagedSpecies(employeeObject) { // Retorna um array com os animais gerenciados
  const animals = data.species;
  const managedAnimals = employeeObject.responsibleFor;
  const arrAnimals = [];
  animals.forEach((animal) => {
    if (managedAnimals.includes(animal.id) || managedAnimals.includes(animal.name)) {
      arrAnimals.push(animal.name);
    }
  });
  return arrAnimals;
}
function getSpeciesLocations(managedAnimals) { // Retorna um array com as locaçoes das especies
  const animals = data.species;
  const animalLocations = [];
  animals.forEach((animal) => {
    if (managedAnimals.includes(animal.name)) {
      animalLocations.push(animal.location);
    }
  });
  return animalLocations;
}
function getEmployee(employeeObject) { // Retorna um objeto que contem o funcionario
  const employess = Object.values(data.employees);
  let specificEmployee = 1;
  employess.forEach((employee) => {
    if (employeeObject.name === employee.firstName) {
      specificEmployee = employee;
    }
    if (employeeObject.name === employee.lastName) {
      specificEmployee = employee;
    }
    if (employeeObject.id === employee.id) {
      specificEmployee = employee;
    }
  });
  return specificEmployee;
}
function coverage(employeeObject) {
  const employee = getEmployee(employeeObject);
  if (employee !== 1) {
    const species = getManagedSpecies(employee);
    const locations = getSpeciesLocations(species);
    const { id } = employee;
    const fullName = `${employee.firstName} ${employee.lastName}`;
    return { id, fullName, species, locations };
  }
  throw new Error('Informações inválidas');
}
function getEmployeesCoverage(employeeObject) {
  // seu código aqui
  if (!employeeObject) {
    const allEmployees = data.employees;
    const allCoverage = [];
    allEmployees.forEach((employee) => {
      allCoverage.push(coverage(employee));
    });
    return allCoverage;
  }
  return coverage(employeeObject);
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
