export default function partition(array: any[], iteratee: any) {
  return array.reduce((acc, curr) => {
    const match = Object.entries(iteratee).reduce(
      (acc2, curr2) => {
        return acc2 && curr[curr2[0]] === curr2[1];
      },
      true,
    );
    if (match) {
      return [
        [...acc[0], curr],
        [...acc[1]]
      ];
    } else {
      return [
        [...acc[0]],
        [...acc[1], curr]
      ];
    }
  }, [[], []]);
}
