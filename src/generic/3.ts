/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends Object, K extends Object > (objA: T, objB: K): Object {
  return Object.assign(objA, objB);
}

let mergeresult = merge(1, 'world')
console.log(mergeresult);

export {}
