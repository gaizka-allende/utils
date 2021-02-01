function objectCallback(iteratee: any, element: any): boolean {
  const entries = Object.entries(iteratee);
  return entries.reduce<boolean>((acc, curr) => {
    const [name, value] = curr;
    return acc && element[name] === value;
  }, true);
}
function propertyCallback(propertyName: any, element: string) {
  // @ts-ignore
  if (element[propertyName]) {
    return true;
  }
  return false;
}
export default function findIndex(array: any[], iteratee: any): number {
  if (typeof iteratee === "string") {
    return array.findIndex((element) => propertyCallback(iteratee, element));
  }
  return array.findIndex((element) => objectCallback(iteratee, element));
}
