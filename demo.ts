// Create HelloWorld
// createHelloWorld is a higher-order function — it returns another function.
/**
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * f(1, 2, 3); // "Hello World"
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n; // belongs to the lexical environment of createCounter
    if(count < 1000)
    return function() {  // this inner function closes over `count`
        return count ++;

    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */



// ToBe
/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
  return {
    toBe: function(otherVal) {
      if (val === otherVal) return true;
      throw new Error("Not Equal");
    },
    notToBe: function(otherVal) {
      if (val !== otherVal) return true;
      throw new Error("Equal");
    }
  };
};

/**
 * Example usage:
 * const f = () => expect(5).toBe(5);
 * console.log(f()); // true
 * 
 * const g = () => expect(5).notToBe(5);
 * // throws "Equal" 
 */







// Appendix
// More Examples https://leetcode.com/studyplan/30-days-of-javascript/
