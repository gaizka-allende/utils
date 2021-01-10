/*
 Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
*/
export default function chunk(array, numberOfChuncks) {
  if (!Array.isArray(array)) {
    return array;
  }

  if(typeof numberOfChuncks !== 'number') {
    return array;
  }

  if (numberOfChuncks <= 1 || numberOfChuncks > array.length) {
    return array;
  }
  const quotient = Math.floor(array.length / numberOfChuncks);
  const remainder = array.length % numberOfChuncks;

  let chunks = [];
  let chunk;
  let index = 0;
  for(let i = 1; i <= numberOfChuncks; i += 1) {
    if (i < numberOfChuncks) {
      chunk = array.slice(index, index + quotient);
    } else {
      chunk = array.slice(index, index + quotient + remainder);
    }

    chunks.push(chunk);
    index += quotient;
  }

    return chunks;
}
