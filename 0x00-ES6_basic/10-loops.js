export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (const value of array) {
    finalArray.push(appendString + value);
  }
  return finalArray;
}
