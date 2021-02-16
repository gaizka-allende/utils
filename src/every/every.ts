export default function every(array: any[], iteratee: any): boolean {
  return array.reduce((acc, curr) => {
    return (
      acc &&
      Object.entries(iteratee).reduce((acc2, curr2) => {
        return acc && curr[curr2[0]] === curr2[1];
      }, true)
    );
  }, true);
}
