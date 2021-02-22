export default function groupBy(array: any[], iteratee: any) {
  
  return array.reduce((acc, curr) => {
    let property;
    if (typeof iteratee === 'function') {
      property = iteratee(curr);
    } else {
      property = curr[iteratee];
    }
    if (acc[property] === undefined) {
      return {
        ...acc,
        [property]: [curr],
      };
    } else {
      return {
        ...acc,
        [property]: [...acc[property], curr],
      };
    }
  }, {});
}
