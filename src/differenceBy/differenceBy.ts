/*
This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument.
*/

function differenceByIteratee(inspect: any[], exclude: any[], iteratee: (item: string | number) => string | number): any[] {
  const mappedExclude = exclude.map((item: string | number) => iteratee(item));
  return inspect.filter((item: string | number) => !mappedExclude.includes(iteratee(item)));
}

function differenceByProperty(inspect: any[], exclude: any[], iteratee: string): any[] {
  return inspect.filter((item: string) => {
    // @ts-expect-error
    return item[iteratee] !== exclude[0][iteratee];
  });
}

type iterateeType = string | ((item: any) => any);

export default function differenceBy(inspect: any[], exclude: any[], iteratee: iterateeType) {
  if (typeof iteratee === "function") {
    return differenceByIteratee(inspect, exclude, iteratee);
  }
  return differenceByProperty(inspect, exclude, iteratee);
}
