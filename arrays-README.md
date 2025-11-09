# 📘 LeetCode Study Reference (Full Descriptions + Keywords + Solutions)

### 🧮 2169. Count Operations to Obtain Zero  
**Description:**  
> You are given two non-negative integers `num1` and `num2`.  
> In one operation, if `num1 >= num2`, you must subtract `num2` from `num1`, otherwise subtract `num1` from `num2`.  
> For example, if `num1 = 5` and `num2 = 4`, subtract `num2` from `num1`, thus obtaining `num1 = 1` and `num2 = 4`.  
> Return the number of operations required to make either `num1 = 0` or `num2 = 0`.

**Keywords / Hints:**  
“subtract smaller from larger”, “until one is zero” → while loop, conditional subtraction

**Example Solution:**
```js
function countOperations(num1, num2) {
  let count = 0;
  while (num1 && num2) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    count++;
  }
  return count;
}
console.log(countOperations(2, 3)); // 3
```

---

### 🍱 2677. Chunk Array  
**Description:**  
> Given an array `arr` and a chunk size `size`, return a chunked array.  
> A chunked array contains the original elements in `arr`, but consists of subarrays each of length `size`.  
> The length of the last subarray may be less than `size` if `arr.length` is not evenly divisible by `size`.  
> Solve it without using lodash’s `_.chunk()` function.

**Keywords / Hints:**  
“split array”, “size”, “without lodash” → slice, step by size

**Example Solution:**
```js
function chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
```

---

### 🔢 2695. Array Wrapper  
**Description:**  
> Create a class `ArrayWrapper` that accepts an array of integers in its constructor.  
> When two instances of this class are added together with the `+` operator, the resulting value is the sum of all the elements in both arrays.  
> When the `String()` function is called on the instance, it will return a comma-separated string surrounded by brackets.  

**Keywords / Hints:**  
“class”, “overload + and String()”, “sum elements” → `valueOf()`, `toString()`

**Example Solution:**
```js
class ArrayWrapper {
  constructor(nums) { this.nums = nums; }
  valueOf() { return this.nums.reduce((a,b)=>a+b,0); }
  toString() { return `[${this.nums.join(",")}]`; }
}
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
```

---

### 🧩 2619. Array Prototype Last  
**Description:**  
> Enhance all arrays so you can call `array.last()` on any array, returning the last element, or `-1` if the array is empty.  

**Keywords / Hints:**  
“enhance all arrays”, “return last element or -1” → add method to `Array.prototype`

**Example Solution:**
```js
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};
console.log([1,2,3].last()); // 3
console.log([].last());      // -1
```

---

### 🔁 2626. Array Reduce Transformation  
**Description:**  
> Given an array `nums`, a reducer function `fn`, and an initial value `init`, return the result of executing the reducer sequentially.  
> Do not use `Array.reduce()`.

**Keywords / Hints:**  
“reducer function”, “initial value”, “process sequentially” → manual reduce loop

**Example Solution:**
```js
function reduce(nums, fn, init) {
  let val = init;
  for (const num of nums) val = fn(val, num);
  return val;
}
console.log(reduce([1,2,3,4], (acc, cur) => acc + cur, 0)); // 10
```

---

### 🧮 2649. Nested Array Generator  
**Description:**  
> Given a multi-dimensional array of integers, return a generator object that yields integers in the same order as inorder traversal.

**Keywords / Hints:**  
“generator”, “multi-dimensional”, “inorder traversal” → recursion + yield*

**Example Solution:**
```js
function* inorderTraversal(arr) {
  for (const x of arr) {
    if (Array.isArray(x)) yield* inorderTraversal(x);
    else yield x;
  }
}
console.log([...inorderTraversal([[6],[1,3],[]])]); // [6,1,3]
```

---

### 📈 2774. Array Upper Bound  
**Description:**  
> Enhance arrays so you can call `upperBound(target)` and get the **last index** of `target` in a sorted ascending array, or `-1` if not found.

**Keywords / Hints:**  
“sorted array”, “last index”, “duplicates allowed” → binary search pattern

**Example Solution:**
```js
Array.prototype.upperBound = function(target) {
  let l = 0, r = this.length - 1, ans = -1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this[mid] <= target) {
      if (this[mid] === target) ans = mid;
      l = mid + 1;
    } else r = mid - 1;
  }
  return ans;
};
console.log([3,4,6,6,6,7].upperBound(6)); // 4
```

---

### 🔁 2804. Array Prototype ForEach  
**Description:**  
> Implement your own `forEach()` that executes a callback on every array element with the correct `this` context.  
> Do not use built-in array methods.

**Keywords / Hints:**  
“enhance all arrays”, “context”, “callback” → prototype + Function.call

**Example Solution:**
```js
Array.prototype.forEach = function(callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    callback.call(context, this[i], i, this);
  }
};
const arr = [1,2,3];
arr.forEach((v,i,a) => a[i] = v * 2);
console.log(arr); // [2,4,6]
```

---

### 🧱 2625. Flatten Deeply Nested Array  
**Description:**  
> Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array up to depth `n`.  
> Do not use `Array.flat()`.

**Keywords / Hints:**  
“multi-dimensional”, “depth n”, “recursive flattening” → recursion or reduce with spread

**Example Solution:**
```js
function flat(arr, n) {
  if (n === 0) return arr;
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) acc.push(...flat(cur, n - 1));
    else acc.push(cur);
    return acc;
  }, []);
}
console.log(flat([1,[2,[3,[4]]]], 2)); // [1,2,3,[4]]
```

---

### 🔍 2634. Filter Elements from Array  
**Description:**  
> Implement your own `filter()` that keeps elements for which the callback returns a truthy value.  
> Do not use built-in `.filter()`.

**Keywords / Hints:**  
“filtering function fn”, “truthy value” → manual for loop, conditional push

**Example Solution:**
```js
function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
}
console.log(filter([0,10,20,30], n => n > 10)); // [20,30]
```

---

### 🔄 2757. Generate Circular Array Values  
**Description:**  
> Given a circular array and a start index, return a generator that yields values circularly based on jump offsets.

**Keywords / Hints:**  
“generator”, “circular array”, “jump positive or negative” → modulo index logic

**Example Solution:**
```js
function* circularGenerator(arr, n) {
  for (let i = 0; i < n; i++) yield arr[i % arr.length];
}
console.log([...circularGenerator([1,2,3], 10)]);
```

---

### 🧮 2675. Array of Objects to Matrix  
**Description:**  
> Convert an array of objects into a matrix where each row represents an object, and the first row contains sorted column names.

**Keywords / Hints:**  
“convert array of objects to matrix”, “sorted keys”, “nested objects” → flatten keys and map to matrix rows

**Example Solution:**
```js
function jsonToMatrix(arr) {
  const keys = Array.from(new Set(arr.flatMap(o => Object.keys(o)))).sort();
  const matrix = [keys];
  arr.forEach(o => matrix.push(keys.map(k => o[k] ?? '')));
  return matrix;
}
console.log(jsonToMatrix([{a:1,b:2},{a:3,b:4}]));
// [["a","b"], [1,2], [3,4]]
```

---

### 🧪 2635. Apply Transform Over Each Element in Array  
**Description:**  
> Apply a mapping function `fn` to each element of an array.  
> Do not use `.map()`.

**Keywords / Hints:**  
“mapping function fn”, “without Array.map” → manual for loop transformation

**Example Solution:**
```js
function map(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) res.push(fn(arr[i], i));
  return res;
}
console.log(map([1,2,3], n => n * 2)); // [2,4,6]
```

---

### 🧰 2722. Join Two Arrays by ID  
**Description:**  
> Merge two arrays of objects by their `id` property.  
> If keys overlap, values from `arr2` override `arr1`.  
> Sort results by `id`.

**Keywords / Hints:**  
“merge arrays by id”, “if duplicate id, arr2 overrides” → Map merge pattern

**Example Solution:**
```js
function join(arr1, arr2) {
  const map = new Map();
  [...arr1, ...arr2].forEach(o => {
    map.set(o.id, {...(map.get(o.id) || {}), ...o});
  });
  return Array.from(map.values()).sort((a,b) => a.id - b.id);
}
console.log(join([{id:1,x:1},{id:2,x:9}], [{id:3,x:5},{id:1,y:2}]));
// [{id:1,x:1,y:2},{id:2,x:9},{id:3,x:5}]
```

---

### ⚙️ 2794. Create Object from Two Arrays  
**Description:**  
> Given `keysArr` and `valuesArr`, create an object where each key corresponds to its value.  
> If a duplicate key exists earlier, skip later ones.  

**Keywords / Hints:**  
“keysArr”, “valuesArr”, “skip duplicates” → use forEach, guard with key existence check

**Example Solution:**
```js
function createObject(keys, values) {
  const obj = {};
  keys.forEach((k, i) => {
    if (!(k in obj)) obj[k] = values[i];
  });
  return obj;
}
console.log(createObject(['a','b','c'], [1,2,3]));
// { a: 1, b: 2, c: 3 }
```

# 📘 JavaScript LeetCode Practice Guide

A collection of clear JavaScript solutions and examples for key LeetCode problems.

---

## 🧮 2169. Count Operations to Obtain Zero (Easy)

```js
function countOperations(num1, num2) {
  let count = 0;
  while (num1 && num2) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    count++;
  }
  return count;
}
console.log(countOperations(2, 3)); // 3
```

---

## 🍱 2677. Chunk Array (Easy)

```js
function chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
```

---

## 🔢 2695. Array Wrapper (Easy)

```js
class ArrayWrapper {
  constructor(nums) { this.nums = nums; }
  valueOf() { return this.nums.reduce((a,b)=>a+b,0); }
  toString() { return `[${this.nums.join(",")}]`; }
}
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
```

---

## 🧩 2619. Array Prototype Last (Easy)

```js
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};
console.log([1,2,3].last()); // 3
console.log([].last());      // -1
```

---

## 🔁 2626. Array Reduce Transformation (Easy)

```js
function reduce(nums, fn, init) {
  let val = init;
  for (const num of nums) val = fn(val, num);
  return val;
}
console.log(reduce([1,2,3,4], (acc, cur) => acc + cur, 0)); // 10
```

---

## 🧮 2649. Nested Array Generator (Medium)

```js
function* inorderTraversal(arr) {
  for (const x of arr) {
    if (Array.isArray(x)) yield* inorderTraversal(x);
    else yield x;
  }
}
console.log([...inorderTraversal([[6],[1,3],[]])]); // [6,1,3]
```

---

## 📈 2774. Array Upper Bound (Easy)

```js
Array.prototype.upperBound = function(target) {
  let l = 0, r = this.length - 1, ans = -1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this[mid] <= target) {
      if (this[mid] === target) ans = mid;
      l = mid + 1;
    } else r = mid - 1;
  }
  return ans;
};
console.log([3,4,6,6,6,7].upperBound(6)); // 4
```

---

## 🔁 2804. Array Prototype ForEach (Easy)

```js
Array.prototype.forEach = function(callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    callback.call(context, this[i], i, this);
  }
};
const arr = [1,2,3];
arr.forEach((v,i,a) => a[i] = v * 2);
console.log(arr); // [2,4,6]
```

---

## 🧱 2625. Flatten Deeply Nested Array (Medium)

```js
function flat(arr, n) {
  if (n === 0) return arr;
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) acc.push(...flat(cur, n - 1));
    else acc.push(cur);
    return acc;
  }, []);
}
console.log(flat([1,[2,[3,[4]]]], 2)); // [1,2,3,[4]]
```

---

## 🔍 2634. Filter Elements from Array (Easy)

```js
function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
}
console.log(filter([0,10,20,30], n => n > 10)); // [20,30]
```

---

## 🔄 2757. Generate Circular Array Values (Medium)

```js
function* circularGenerator(arr, n) {
  for (let i = 0; i < n; i++) yield arr[i % arr.length];
}
console.log([...circularGenerator([1,2,3], 10)]);
```

---

## 🧮 2675. Array of Objects to Matrix (Hard)

```js
function jsonToMatrix(arr) {
  const keys = Array.from(new Set(arr.flatMap(o => Object.keys(o)))).sort();
  const matrix = [keys];
  arr.forEach(o => matrix.push(keys.map(k => o[k] ?? '')));
  return matrix;
}
console.log(jsonToMatrix([{a:1,b:2},{a:3,b:4}]));
// [["a","b"], [1,2], [3,4]]
```

---

## 🧪 2635. Apply Transform Over Each Element in Array (Easy)

```js
function map(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) res.push(fn(arr[i], i));
  return res;
}
console.log(map([1,2,3], n => n * 2)); // [2,4,6]
```

---

## 🧰 2722. Join Two Arrays by ID (Medium)

```js
function join(arr1, arr2) {
  const map = new Map();
  [...arr1, ...arr2].forEach(o => {
    map.set(o.id, {...(map.get(o.id) || {}), ...o});
  });
  return Array.from(map.values()).sort((a,b) => a.id - b.id);
}
console.log(join([{id:1,x:1},{id:2,x:9}], [{id:3,x:5},{id:1,y:2}]));
// [{id:1,x:1,y:2},{id:2,x:9},{id:3,x:5}]
```

---

## ⚙️ 2794. Create Object from Two Arrays (Easy)

```js
function createObject(keys, values) {
  const obj = {};
  keys.forEach((k, i) => {
    if (!(k in obj)) obj[k] = values[i];
  });
  return obj;
}
console.log(createObject(['a','b','c'], [1,2,3]));
// { a: 1, b: 2, c: 3 }
```

---

## 🏁 Summary
These problems reinforce:
- Array iteration (`for`, `reduce`, `forEach`)
- Prototypes
- Recursion and generators
- Object merging and transformations

---

# 🧠 LeetCode Problem Keywords & Hints

| # | Problem | Keywords / Hints |
|---|----------|------------------|
| 2169 | Count Operations to Obtain Zero | "subtract smaller from larger", "until one is zero" → while loop, conditional subtraction |
| 2677 | Chunk Array | "split array", "size", "subarrays", "without lodash" → use slice, increment by size |
| 2695 | Array Wrapper | "class", "overload + and String()", "sum elements" → valueOf(), toString() |
| 2619 | Array Prototype Last | "enhance all arrays", "return last element or -1" → add method to Array.prototype |
| 2626 | Array Reduce Transformation | "reducer function", "initial value", "process sequentially" → simulate reduce manually |
| 2649 | Nested Array Generator | "multi-dimensional array", "generator object", "inorder traversal" → recursion + yield* |
| 2774 | Array Upper Bound | "sorted array", "last index", "may contain duplicates" → binary search pattern |
| 2804 | Array Prototype ForEach | "enhance all arrays", "context", "callback function" → use Function.call(context, ...) |
| 2625 | Flatten Deeply Nested Array | "multi-dimensional", "depth n", "recursive" → recursion or reduce, handle depth limit |
| 2634 | Filter Elements from Array | "filtering function fn", "truthy value" → implement manual filter loop |
| 2757 | Generate Circular Array Values | "generator", "circular array", "jump positive or negative" → yield with modulo index logic |
| 2675 | Array of Objects to Matrix | "convert array of objects to matrix", "column names sorted lexicographically" → nested key flattening |
| 2635 | Apply Transform Over Each Element in Array | "mapping function fn", "without Array.map" → implement simple map manually |
| 2722 | Join Two Arrays by ID | "merge arrays by id", "if duplicate id, arr2 overrides" → use Map and merge objects |
| 2794 | Create Object from Two Arrays | "keysArr", "valuesArr", "first occurrence only" → iterate with forEach, skip duplicate keys |

---
