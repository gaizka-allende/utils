/*Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.*/

export default function compact(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  return array.filter((item) => item !== false && item !== null && item !== "" && item !== undefined);
}
