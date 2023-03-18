const data = require('../data/zoo_data');

function isManager(employeeId) {
  return data.employees.some(({ managers }) => managers.includes(employeeId));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.map((employee) => {
      const { managers, firstName, lastName } = employee;
      return managers.includes(managerId) ? `${firstName} ${lastName}` : undefined;
    }).filter((manager) => manager !== undefined);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
