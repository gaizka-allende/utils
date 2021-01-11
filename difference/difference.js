/*
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
*/
export default function difference(inspect, exclude) {
  if (!Array.isArray(inspect) || !Array.isArray(exclude)) {
    return inspect;
  }
  return inspect.filter((item) => !exclude.includes(item));
}
