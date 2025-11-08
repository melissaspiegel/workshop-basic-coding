Perfect — here’s your **JavaScript prep sheet** for the most common **TestGorilla “Coding: Data Structures – Arrays”** question types.
These are *exactly* the kind of problems that appear when you get **1 question, 35 minutes** — they’re meant to test logic, efficiency, and clean JS syntax.

---

## 🧩 1. Two Sum (Hash Map Pattern)

**Goal:** Find two indices whose numbers sum to a target.

```js
function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return []; // no solution
}

// Example:
console.log(twoSum([2,7,11,15], 9)); // [0,1]
```

**Time:** O(n) **Space:** O(n)

---

## 🔁 2. Remove Duplicates from Sorted Array (Two Pointers)

**Goal:** Modify the array *in place* to remove duplicates.

```js
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write++] = nums[read];
    }
  }
  return write; // length of unique portion
}

// Example:
let arr = [1,1,2,2,3];
console.log(removeDuplicates(arr)); // 3 (unique: [1,2,3])
```

**Time:** O(n) **Space:** O(1)

---

## 🚚 3. Move Zeroes (In-Place Reorder)

**Goal:** Move all zeroes to the end while keeping order.

```js
function moveZeroes(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      [nums[write], nums[read]] = [nums[read], nums[write]];
      write++;
    }
  }
  return nums;
}

// Example:
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
```

**Time:** O(n) **Space:** O(1)

---

## ⚙️ 4. Product of Array Except Self (Prefix/Suffix)

**Goal:** Return an array `res[i] = product of all nums except nums[i]` without using division.

```js
function productExceptSelf(nums) {
  const res = Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}

// Example:
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
```

**Time:** O(n) **Space:** O(1) (excluding output)

---

## 📈 5. Maximum Subarray Sum (Kadane’s Algorithm)

**Goal:** Find the contiguous subarray with the largest sum.

```js
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSoFar = Math.max(maxSoFar, current);
  }

  return maxSoFar;
}

// Example:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6  (subarray [4,-1,2,1])
```

**Time:** O(n) **Space:** O(1)

---

## ⚡ Quick Strategy for TestGorilla

* **Read the full prompt** twice — many include constraints like “modify in place” or “return length.”
* **Add edge-case checks** (`if (!nums.length) return 0;`).
* **Log sample outputs** to confirm logic before submission.
* **Aim for O(n)** unless problem clearly needs sorting.

---

Would you like me to turn these into **flashcards** (term on front, code/complexity on back) or a **one-page printable cheat sheet** for you to review before the test?



/******************************
 *  Basics / Closures
 ******************************/

// 2667. Create Hello World Function
var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  };
};

// 2620. Counter (single function returning next value)
var createCounter = function(n) {
  return function() { return n++; };
};

// 2665. Counter II (object with methods)
var createCounter = function(init) {
  let current = init;
  return {
    increment() { return ++current; },
    decrement() { return --current; },
    reset()     { current = init; return current; }
  };
};

// 2703. Return Length of Arguments Passed
var argumentsLength = function(...args) { return args.length; };

// 2704. To Be Or Not To Be
var expect = function(val) {
  return {
    toBe(other) { if (val === other) return true; throw new Error("Not Equal"); },
    notToBe(other) { if (val !== other) return true; throw new Error("Equal"); }
  };
};


/******************************
 *  Array transforms
 ******************************/

// 2635. Map
var map = function(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i));
  return out;
};

// 2634. Filter
var filter = function(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i)) out.push(arr[i]);
  return out;
};

// 2626. Reduce Transformation
var reduce = function(nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) acc = fn(acc, nums[i]);
  return acc;
};

// 2677. Chunk Array
var chunk = function(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
};

// 2619. Array Prototype Last
Array.prototype.last = function() { return this.length ? this[this.length - 1] : -1; };

// 2724. Sort By (stable-ish simple)
var sortBy = function(arr, fn) {
  return [...arr].sort((a, b) => {
    const va = fn(a), vb = fn(b);
    return va < vb ? -1 : va > vb ? 1 : 0;
  });
};

// 2631. Group By
Array.prototype.groupBy = function(fn) {
  return this.reduce((acc, item) => {
    const k = fn(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {});
};

// 2722. Join Two Arrays by ID
var join = function(arr1, arr2) {
  const map = new Map();
  for (const o of [...arr1, ...arr2]) {
    const prev = map.get(o.id) || {};
    map.set(o.id, { ...prev, ...o });
  }
  return [...map.values()].sort((a,b) => a.id - b.id);
};

// 2625. Flatten Deeply Nested Array
var flat = function(arr, n) {
  if (n === 0) return arr.slice();
  const out = [];
  for (const el of arr) {
    if (Array.isArray(el)) out.push(...flat(el, n - 1));
    else out.push(el);
  }
  return out;
};

// 2705. Compact Object (remove falsy, deep)
var compactObject = function(obj) {
  if (!obj) return obj;
  if (Array.isArray(obj)) return obj.map(compactObject).filter(Boolean);
  if (typeof obj === 'object') {
    const res = {};
    for (const k in obj) {
      const v = compactObject(obj[k]);
      if (v) res[k] = v;
    }
    return res;
  }
  return obj;
};

// 2727. Is Object Empty
var isEmpty = function(obj) {
  if (Array.isArray(obj)) return obj.length === 0;
  for (const _ in obj) return false;
  return true;
};


/******************************
 *  Function utilities
 ******************************/

// 2629. Function Composition (right-to-left)
var compose = functions => x => functions.reduceRight((acc, fn) => fn(acc), x);

// 2666. Allow One Function Call
var once = function(fn) {
  let called = false, val;
  return function(...args) {
    if (!called) { called = true; val = fn.apply(this, args); return val; }
    return undefined;
  };
};

// 2632. Curry
var curry = function(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...rest) => curried.apply(this, args.concat(rest));
  };
};

// 2623. Memoize
var memoize = function(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn.apply(this, args);
    cache.set(key, res);
    return res;
  };
};


/******************************
 *  Timing / Promises
 ******************************/

// 2621. Sleep
async function sleep(millis) { return new Promise(r => setTimeout(r, millis)); }

// 2715. Timeout Cancellation
var cancellable = function(fn, args, t) {
  const id = setTimeout(() => fn(...args), t);
  return function cancel() { clearTimeout(id); };
};

// 2725. Interval Cancellation
var cancellableInterval = function(fn, args, t) {
  const id = setInterval(() => fn(...args), t);
  return function cancel() { clearInterval(id); };
};

// 2637. Promise Time Limit
var timeLimit = function(fn, t) {
  return async function(...args) {
    return await Promise.race([
      fn(...args),
      new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t))
    ]);
  };
};

// 2622. Cache With Time Limit
var TimeLimitedCache = function() {
  this.map = new Map(); // key -> { value, expire }
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const existed = this.map.has(key) && this.map.get(key).expire > Date.now();
  this.map.set(key, { value, expire: Date.now() + duration });
  return !!existed;
};
TimeLimitedCache.prototype.get = function(key) {
  const entry = this.map.get(key);
  if (!entry || entry.expire <= Date.now()) return -1;
  return entry.value;
};
TimeLimitedCache.prototype.count = function() {
  const now = Date.now();
  let c = 0;
  for (const { expire } of this.map.values()) if (expire > now) c++;
  return c;
};

// 2721. Execute Asynchronous Functions in Parallel
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const n = functions.length, results = new Array(n);
    let done = 0;
    if (n === 0) return resolve([]);
    functions.forEach((f, i) => {
      Promise.resolve().then(f).then(v => {
        results[i] = v;
        if (++done === n) resolve(results);
      }).catch(reject);
    });
  });
};

// 2723. Add Two Promises
var addTwoPromises = async function(p1, p2) { return await p1 + await p2; };


/******************************
 *  Deep / JSON
 ******************************/

// 2628. JSON Deep Equal
var areDeeplyEqual = function(o1, o2) {
  if (Object.is(o1, o2)) return true;
  if (typeof o1 !== typeof o2) return false;
  if (typeof o1 !== 'object' || o1 === null || o2 === null) return false;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;
    for (let i = 0; i < o1.length; i++) if (!areDeeplyEqual(o1[i], o2[i])) return false;
    return true;
  } else {
    const k1 = Object.keys(o1), k2 = Object.keys(o2);
    if (k1.length !== k2.length) return false;
    for (const k of k1) if (!areDeeplyEqual(o1[k], o2[k])) return false;
    return true;
  }
};

// 2633. Convert Object to JSON String (stringify)
var jsonStringify = function(object) {
  if (object === null) return "null";
  const t = typeof object;
  if (t === "number" || t === "boolean") return String(object);
  if (t === "string") return `"${object.replace(/"/g, '\\"')}"`;
  if (Array.isArray(object)) return `[${object.map(jsonStringify).join(",")}]`;
  const entries = Object.keys(object).map(k => `"${k}":${jsonStringify(object[k])}`);
  return `{${entries.join(",")}}`;
};


/******************************
 *  Classes / Patterns
 ******************************/

// 2694. Event Emitter
class EventEmitter {
  constructor() { this.map = new Map(); }
  subscribe(event, cb) {
    (this.map.get(event) || this.map.set(event, new Set()).get(event)).add(cb);
    return { unsubscribe: () => this.map.get(event)?.delete(cb) };
  }
  emit(event, args = []) {
    const cbs = this.map.get(event);
    if (!cbs) return [];
    const out = [];
    for (const cb of [...cbs]) out.push(cb(...args));
    return out;
  }
}

// 2726. Calculator with Method Chaining
class Calculator {
  constructor(value) { this.result = value; }
  add(v){ this.result += v; return this; }
  subtract(v){ this.result -= v; return this; }
  multiply(v){ this.result *= v; return this; }
  divide(v){ this.result /= v; return this; }
  power(v){ this.result = Math.pow(this.result, v); return this; }
  getResult(){ return this.result; }
}

// 2695. Array Wrapper (operator behavior)
var ArrayWrapper = function(nums) { this.nums = nums; };
ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((a, n) => a + n, 0);
};
ArrayWrapper.prototype.toString = function() {
  return "[" + this.nums.join(",") + "]";
};


/******************************
 *  Classic array merge (Top 150 #88)
 ******************************/
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
};


/******************************
 *  Debounce / Throttle (handy IRL)
 ******************************/

// Debounce
function debounce(fn, t) {
  let id = null;
  return function(...args) {
    if (id) clearTimeout(id);
    id = setTimeout(() => fn.apply(this, args), t);
  };
}

// Throttle (trailing)
function throttle(fn, t) {
  let id = null, lastArgs = null;
  return function(...args) {
    lastArgs = args;
    if (id) return;
    id = setTimeout(() => {
      fn.apply(this, lastArgs);
      id = null;
      lastArgs = null;
    }, t);
  };
}



## git rebase main 
// Moves your feature branch commits on top of main
// Cleaner history

// git rebase -i main
// Interactive mode — lets you squash, edit, or reorder commits
// git rebase --continue
// Resume after resolving a conflict
// git rebase --abort
// Cancel the rebase and restore previous state
// git rebase --skip
// Skip the current conflicting commit

