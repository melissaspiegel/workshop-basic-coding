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
