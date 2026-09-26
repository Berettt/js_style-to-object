'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let convertStr = sourceString.split(';');

  convertStr = convertStr.map((a) => a.trim());
  convertStr = convertStr.filter((item) => item !== '');

  const output = convertStr.reduce((result, elem) => {
    const separator = elem.indexOf(':');
    const name = elem.slice(0, separator).trim();
    const key = elem.slice(separator + 1).trim();

    result[name] = key;

    return result;
  }, {});

  return output;
}

module.exports = convertToObject;
