export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  let currentIndex = 0;

  return {
    next() {
      const done = currentIndex >= employeeList.length;
      const value = !done ? employeeList[currentIndex] : undefined;
      currentIndex += 1;
      return { value, done };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
