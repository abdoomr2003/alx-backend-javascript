export default function setFromArray(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const mySet = new Set();
  for (const value of arr) {
    mySet.add(value);
  }
  return mySet;
}
