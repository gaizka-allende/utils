export default function countBy(array: any[], iteratee: (...args: any[]) => any) {
  return array.reduce((acc, curr) => {
    if (acc[String(iteratee(curr))]) {
      return {
        ...acc,
        [String(iteratee(curr))]: acc[String(iteratee(curr))] + 1,
      };
    } else {
      return {
        ...acc,
        [String(iteratee(curr))]: 1,
      };
    }
  }, {});
}
