export default function createIteratorObject(report) {
  let allEmployees = [];
  for (let department of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...department];
  }
  return allEmployees;
}
