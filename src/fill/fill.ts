/* Fills elements of array with value from start up to, but not including, end. */
export default function fill(array: any[], value: any, start?: number, end?: number): any[] {
  if (start === undefined) {
    return array.map((x) => value);
  }
  const endIndex = end || array.length;
  return array.map((x, index) => {
    if (index >= start && index < endIndex) {
      return value;
    }
    return x;
  });
}
