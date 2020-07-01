/**
 * replaceParmas
 * @param {string} str
 * @param {object} obj
 * @return {string}
 */
export function replaceParmas(str, obj) {
  if (!str || !isObject(obj)) {
    return str
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str = str.replace(new RegExp('{' + key + '}', 'g'), obj[key])
    }
  }

  return str
}
