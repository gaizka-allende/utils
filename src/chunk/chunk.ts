/*
 Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
*/
export default function chunk(array: any[], numberOfChuncks: number): any[] {
  if (numberOfChuncks <= 1 || numberOfChuncks > array.length) {
    return array;
  }
  const quotient = Math.floor(array.length / numberOfChuncks);
  const remainder = array.length % numberOfChuncks;

  let chunks: any[] = [];
  let index = 0;
  for (let i = 1; i <= numberOfChuncks; i += 1) {
    if (i < numberOfChuncks) {
      chunks = [...chunks, array.slice(index, index + quotient)];
    } else {
      chunks = [...chunks, array.slice(index, index + quotient + remainder)];
    }

    index += quotient;
  }

  return chunks;
}
