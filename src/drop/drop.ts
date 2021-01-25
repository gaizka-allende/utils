/* Creates a slice of array with n elements dropped from the beginning. */

export default function drop(array: any[], n: number) {
  if (n <= 0 || n >= array.length) {
    return array;
  }
  return array.slice(n);
}
