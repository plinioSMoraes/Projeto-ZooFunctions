const data = require('../data/zoo_data');

const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters',
  'frogs', 'snakes', 'elephants', 'giraffes'];
const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday', 'Monday'];

function testAnimal(param) { // Retorna true se o parametro e um dia ou animal e falso caso o contrario
  let statement = 0; // Se for 0, o parametro não é um dia ou um animal ou é vazio
  if (animals.includes(param)) {
    statement = 1; // Se for 1, o parametro é um animal
  }
  if (weekDays.includes(param)) {
    statement = -1; // Se for -1, o parametro é um dia
  }
  return statement;
}
function dayTime(objectHours, day) { // Retorna uma string com o horario de funcionamento do dia
  let openTime = '';
  objectHours.forEach((schedule) => {
    const hours = Object.values(schedule[1]);
    if (schedule[0] === day) {
      if (hours[0] !== 0 && hours[1] !== 0) {
        openTime = `Open from ${hours[0]}am until ${hours[1]}pm`;
      } else {
        openTime = 'CLOSED';
      }
    }
  });
  return openTime;
}
function animalTime(day) { // retorna um array com os animais disponiveis no dia
  const animalSpecies = data.species;
  const animalArr = [];
  animalSpecies.forEach((animal) => {
    // console.log(animal.availability);
    if (animal.availability.includes(day)) {
      animalArr.push(animal.name);
    }
  });
  if (animalArr.length === 0) {
    return 'The zoo will be closed!';
  }
  return animalArr;
}
function daysSchedule(day) { // Retorna um objeto, o horario e animais disponiveis no dia
  const openHours = Object.entries(data.hours);
  const dayObj = {};
  if (day === 'Monday') {
    dayObj[day] = { officeHour: dayTime(openHours, day), exhibition: animalTime(day) };
    return dayObj;
  }
  dayObj[day] = { officeHour: dayTime(openHours, day), exhibition: animalTime(day) };
  return dayObj;
}
function animalDates(certainAnimal) { // Caso o parametro seja um animal, essa funçao retorna um array com os dias do animal
  const animalObjects = data.species;
  let avaiableDates = [];
  animalObjects.forEach((animal) => {
    if (animal.name === certainAnimal) {
      avaiableDates = animal.availability;
    }
  });
  return avaiableDates;
}
function voidAnimal() { // Retornar todos os horarios disponiveis para cada dia da semana
  const allSchedule = {};
  weekDays.forEach((day) => {
    // allSchedule[day] = daysSchedule(day);
    Object.assign(allSchedule, daysSchedule(day));
  });
  // console.log(allSchedule);
  return allSchedule;
}
function animalSchedule(animalDay) { // Funçao para montar os horarios dos animais
  const statement = testAnimal(animalDay);
  if (statement === 1) {
    return animalDates(animalDay);
  }
  if (statement === -1) {
    return daysSchedule(animalDay);
  }
  return voidAnimal();
}

function getSchedule(scheduleTarget) { // seu código aqui
  return animalSchedule(scheduleTarget);
}

console.log(getSchedule('fdsaf'));
module.exports = getSchedule;
