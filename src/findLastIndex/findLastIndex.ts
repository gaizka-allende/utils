function objectCallback(iteratee: any, element: any): boolean {
  const entries = Object.entries(iteratee);
  return entries.reduce<boolean>((acc, curr) => {
    const [name, value] = curr;
    return acc && element[name] === value;
  }, true);
}
function propertyCallback(propertyName: string, element: string) {
  // @ts-ignore
  if (element[propertyName]) {
    return true;
  }
  return false;
}

export default function findIndex(array: any[], iteratee: any): number {
  if (typeof iteratee === "string") {
    return array.reduce((acc, curr, index) => {
      if (propertyCallback(iteratee, curr)) {
        return index;
      }
      return acc;
    }, -1);
  }

  return array.reduce((acc, curr, index) => {
    if (objectCallback(iteratee, curr)) {
      return index;
    }
    return acc;
  }, -1);
}
