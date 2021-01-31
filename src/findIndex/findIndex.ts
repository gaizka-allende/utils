export default function findIndex(array: any[], iteratee: any): number {
  const entries = Object.entries(iteratee);
  return array.findIndex((element) => {
    return entries.reduce<boolean>((acc, curr) => {
      const [name, value] = curr;
      return acc && element[name] === value;
    }, true);
  });
}
