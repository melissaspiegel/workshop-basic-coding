/**
 * Generator that yields elements of a circular array.
 * Each call to next() can pass a jump (positive or negative)
 * to move around the array in a loop.
 *
 * Example:
 * const gen = circularGenerator([1,2,3], 0);
 * gen.next().value   // 1
 * gen.next(1).value  // 2
 * gen.next(1).value  // 3
 * gen.next(1).value  // 1 (wraps around)
 * gen.next(-2).value // 2 (moves backward)
 */

function* circularGenerator(arr, startIndex = 0) {
  if (!Array.isArray(arr) || arr.length === 0) return;
  
  let index = startIndex % arr.length; // start within array bounds

  // Always yield at least once
  while (true) {
    // yield current element and receive optional jump input
    const jump = yield arr[index];

    // Only change index if jump was passed in next(jump)
    if (typeof jump === 'number') {
      // move index by jump and wrap around (circular)
      index = (index + jump) % arr.length;
      if (index < 0) index += arr.length; // handle negatives
    } else {
      // if no jump provided, move to next element
      index = (index + 1) % arr.length;
    }
  }
}

// Example use:
const gen = circularGenerator(['A', 'B', 'C'], 0);
console.log(gen.next().value);    // "A"
console.log(gen.next(1).value);   // "B"
console.log(gen.next(1).value);   // "C"
console.log(gen.next(1).value);   // "A" (wraps)
console.log(gen.next(-2).value);  // "B" (moves backward)
console.log(gen.next().value);    // "C"
