# 🧠 JavaScript Recursion Cheat Sheet

A quick reference guide to common recursion patterns and interview-ready examples.  
These are designed to be reusable templates you can adapt during coding challenges.

---

## 🌱 What Is Recursion?

> Recursion means a function **calls itself** to solve smaller parts of a bigger problem.

Every recursive function needs:
1. A **base case** (when to stop).
2. A **recursive step** (calling itself on smaller input).

---

## 🧩 1. Nested Array Traversal

```js
function* inorderTraversal(arr) {
  for (const x of arr) {
    if (Array.isArray(x)) yield* inorderTraversal(x);
    else yield x;
  }
}
```

✅ Use this pattern to **flatten** multi-dimensional arrays or **yield all integers** in order.

---

## 🌳 2. Tree Traversal (Depth-First Search)

```js
function dfs(node) {
  if (!node) return;
  console.log(node.val); // visit node
  dfs(node.left);
  dfs(node.right);
}
```

✅ Common in **binary tree**, **graph**, or **nested object** problems.

---

## 🔢 3. Factorial

```js
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive step
}
```

✅ Classic recursion question — demonstrates understanding of base case vs. recursive case.

---

## ➕ 4. Sum of Nested Array

```js
function sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += Array.isArray(x) ? sum(x) : x;
  }
  return total;
}
```

✅ Great pattern for **recursive aggregation** (adding, counting, multiplying).

---

## 📁 5. File System Traversal

```js
function walkDir(dir) {
  for (const entry of dir.entries) {
    if (entry.type === "folder") walkDir(entry);
    else console.log(entry.name);
  }
}
```

✅ Real-world use: scanning **nested folders**, **menus**, or **components**.

---

## 💡 Tips for Spotting Recursion Problems

| Pattern | Description |
|----------|--------------|
| 🔄 Nested structures | arrays within arrays, trees, or graphs |
| 🧭 Traversal keywords | “visit,” “explore,” “walk,” “search,” “flatten” |
| 🧮 Divide and conquer | problem can be broken into smaller subproblems |
| ⚠️ Stack depth | recursion adds frames to the **call stack**, be careful with deep inputs |

---

## ⚙️ Practice Ideas

- Flatten nested arrays (`[[1,[2,[3]]]] → [1,2,3]`)
- Compute depth of a nested structure
- Count files in a folder structure
- Reverse a string using recursion
- Find Fibonacci sequence recursively

---

## 🧩 Example: Combine Recursion with Generators

```js
function* inorderTraversal(arr) {
  for (const x of arr) {
    if (Array.isArray(x)) yield* inorderTraversal(x);
    else yield x;
  }
}

console.log([...inorderTraversal([[6], [1,3], []])]); // [6, 1, 3]
```

---

### ✨ Key Takeaway
> Recursion = a function solving the same problem on a **smaller piece** of data until it reaches a simple base case.

Once you get the pattern, it becomes one of the most powerful tools in your coding arsenal.
