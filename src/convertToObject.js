'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const output = {};
  let convertStr = sourceString.split(';');

  convertStr = convertStr.map((a) => a.trim());
  convertStr = convertStr.filter((item) => item !== '');

  for (let i = 0; i < convertStr.length; i++) {
    for (let j = 0; j < convertStr[i].length; j++) {
      if (convertStr[i][j] === ':') {
        const name = convertStr[i].slice(0, j).trim();
        const key = convertStr[i].slice(j + 1).trim();

        output[name] = key;
      }
    }
  }

  return output;
}

module.exports = convertToObject;
