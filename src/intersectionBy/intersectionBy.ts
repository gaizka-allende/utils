export default function intersectionBy(arrays: any[], property: string) {
  return arrays.reduce((acc, curr, index, array) => {
    if (index < array.length - 1) {
      if (
        array.findIndex((element, index2) => {
          if (index === index2) {
            return false;
          }
          if (element[property] === curr[property]) {
            return true;
          }
          return false;
        }) !== -1
      ) {
        return [...acc, curr];
      } else {
        return acc;
      }
    } else {
      return acc;
    }
  }, []);
}
