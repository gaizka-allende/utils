export default function dropWhile(array: any[], iteratee: any): any[] {
  const entries = Object.entries(iteratee);
  return array.filter((item) => {
    return entries.reduce<boolean>((acc, curr) => {
      const [key, value] = curr;
      if (item[key] === value) {
        return acc || false;
      } else {
        return true;
      }
    }, false);
  });
}
