/*
This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument.
*/

export default function differenceBy(inspect, exclude, iteratee) {
  if (!Array.isArray(inspect) || !Array.isArray(exclude)) {
    return inspect;
  }

  if (typeof iteratee !== "function" && typeof iteratee !== "string") {
    return inspect;
  }

  if (typeof iteratee === "function") {
    const mappedExclude = exclude.map((item) => iteratee(item));
    return inspect.filter((item) => !mappedExclude.includes(iteratee(item)));
  }

  if (typeof iteratee === "string") {
    return inspect.filter((item) => {
      return item[iteratee] !== exclude[0][iteratee];
    });
  }
}
