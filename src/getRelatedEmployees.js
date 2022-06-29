const data = require('../data/zoo_data');

function isManager(id) {
  let statement = false;
  data.employees.forEach((employe) => {
    employe.managers.forEach((manager) => {
      if (manager === id) {
        statement = true;
      }
    });
  });
  return statement;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managedEmployees = [];
    data.employees.forEach((employe) => {
      if (employe.managers.includes(managerId)) {
        const name = `${employe.firstName} ${employe.lastName}`;
        managedEmployees.push(name);
      }
    });
    return managedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
