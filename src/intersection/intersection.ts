export default function intersection(...args: any[]) {
  return args.reduce((acc, curr, index, array) => {
    if (index < array.length - 1) {
      return [
        ...acc,
        ...curr.reduce((acc2: any[], curr2: any) => {
          if (array[index + 1].includes(curr2) && !acc.includes(curr2)) {
            return [...acc2, curr2];
          }
          return acc2;
        }, []),
      ];
    } else {
      return acc;
    }
  }, []);
}
