export default function createIteratorObject(report) {
  let allEmployees = [];
  for (let department of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...department];
  let result = [];
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }
  return allEmployees;

  return result;
}
  
