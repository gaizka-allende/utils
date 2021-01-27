export default function dropWhile(array: any[], iteratee: any): any[] {
  const entries = Object.entries(iteratee);
  return array.filter((item) => {
    let keep = false;
    for (const [key, value] of entries) {
      if (item[key] === value) {
        keep = keep || false;
      } else {
        keep = true;
      }
    }
    return keep;
  });
}
