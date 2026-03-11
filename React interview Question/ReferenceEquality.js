/*
4️⃣ Object Reference Equality (Very Important)

React does NOT compare deep object values.

React compares object reference.



*/

// Example

const obj1 = {
  name: "krishan",
};

const obj2 = obj1;

// memory Diagram

// obj1  ──► { name: "Krishna" }
// obj2  ──► same object

// check Equality

obj1 === obj2   // true


/*Why should we not mutate state directly in React?

Answer:

React compares state using reference equality. If we mutate the object directly, the reference remains the same, so React cannot detect 
the change and the component will not re-render. Therefore we must create a new object using spread operator or other immutable methods.

*/