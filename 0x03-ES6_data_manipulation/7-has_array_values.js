export default function hasValuesFromArray(set, array) {
  return array.every((TorF) => set.has(TorF));
}
