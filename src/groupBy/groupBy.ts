export default function groupBy(array: any[], iteratee: any) {
  return array.reduce((acc, curr) => {
    if (acc[curr[iteratee]] === undefined) {
      return {
        ...acc,
        [curr[iteratee]]: [curr],
      };
    } else {
      return {
        ...acc,
        [curr[iteratee]]: [...acc[curr[iteratee]], curr],
      };
    }
  }, {});
}
