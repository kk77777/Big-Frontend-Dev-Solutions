




/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = new Set();
  for (let e of arr2) {
    if (set1.has(e)) result.add(e);
  }
  return [...result];
}

// const arr1=[1,2,45,63,3,4];
// const arr2=[2,4,1,234,345];
// console.log(getIntersection(arr1,arr2));



