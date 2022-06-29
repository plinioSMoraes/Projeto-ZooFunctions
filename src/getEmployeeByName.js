const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let employ = {};
  data.employees.forEach((employees) => {
    if (employees.firstName === employeeName || employees.lastName === employeeName) {
      employ = employees;
    }
  });
  return employ;
}
console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
