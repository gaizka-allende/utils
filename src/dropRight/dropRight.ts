/*
 * Creates a slice of array with n elements dropped from the end.
 */

export default function dropRight(array: any[], n: number) {
  if (n <= 0 || n >= array.length) {
    return array;
  }
  return array.slice(0, array.length - n);
}
