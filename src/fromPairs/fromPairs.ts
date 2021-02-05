export default function fromPairs(array: any[]) {
  return array.reduce((acc, curr) => {
    return { ...acc, ...{ [curr[0]]: curr[1] } };
  }, {});
}
