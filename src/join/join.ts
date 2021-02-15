export default function join(array: any[], separator: string) {
  return array.reduce((acc, curr, index) => {
    if (index > 0) {
      return `${acc}${separator}${curr}`;
    }
    return curr;
  }, "");
}
