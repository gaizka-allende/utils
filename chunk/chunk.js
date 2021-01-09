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
  for(let i = 0; i < quotient; i += 1) {
    if (i < quotient-1) {
      if (i === 0) {
        chunks.push(array.slice(i, i + quotient));
      } else {
      chunks.push(array.slice(i * quotient, i*quotient + quotient));
      }
    } else {
      chunks.push(array.slice(i * quotient, i*quotient + quotient + remainder));
    }

  }

    return chunks;
}
