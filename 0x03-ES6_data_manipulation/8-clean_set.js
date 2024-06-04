export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || !(typeof startString === 'string')) return '';

  const stringArray = [];

  for (const string of set.values()) {
    if (typeof string === 'string' && string.startsWith(startString)) {
      const subString = string.substring(startString.length);
      if (subString && subString !== string) {
        stringArray.push(subString);
      }
    }
  }
  return stringArray.join('-');
}
