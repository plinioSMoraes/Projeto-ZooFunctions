const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesIds = [];
  ids.forEach((id) => {
    data.species.forEach((species) => {
      if (species.id === id) {
        speciesIds.push(species);
      }
    });
  });
  return speciesIds;
}

module.exports = getSpeciesByIds;
