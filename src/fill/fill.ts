/* Fills elements of array with value from start up to, but not including, end. */
export default function fill(array: any[], value: any, start: number, end: number) {
  if (start === undefined) {
    return array.map((x) => value);
  }
  return array.map((x, index) => {
    if (index >= start && index < end) {
      return value;
    }
    return x;
  });
}
