export function areIterateeProsTheSame(iteratee: any, element: any) {
  return Object.entries(iteratee).reduce(
      (acc, curr) => {
        const name = curr[0];
        const value = curr[1];
        if(element[name] === value) {
          return acc && true;
        }
        return acc && false; 
      },
      true
    );
}

export default function reject(array: any[], iteratee: any) {
  return array.reduce((acc, curr) => {
      if (areIterateeProsTheSame(iteratee, curr)) {
        return acc;
      } else {
        return [...acc, curr];
      }
  }, []); 
}
