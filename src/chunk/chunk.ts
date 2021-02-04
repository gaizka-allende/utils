/*
 Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
*/
export default function chunk(array: any[], numberOfChuncks: number): any[] {
  if (numberOfChuncks <= 1 || numberOfChuncks > array.length) {
    return array;
  }
  const quotient = Math.floor(array.length / numberOfChuncks);
  const remainder = array.length % numberOfChuncks;

  return Array(numberOfChuncks).fill([]).reduce<any[]>((acc, curr, index) => {
    if (index === 0) {
      return [...acc, array.slice(index, index + quotient)]; 
    } else if (index > 0 && index < numberOfChuncks - 1){
      return [...acc, array.slice(index * quotient, index * quotient + quotient)];
    } else {
      return [...acc, array.slice(index * quotient, index * quotient + quotient + remainder)];
    }
  }, []);
}
