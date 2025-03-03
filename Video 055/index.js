var a = 5; // old, legacy, not recommended
let b = 34; // use this
const pi = 3.14;

console.log(a, b, pi);

console.log(a + b + pi);

let firstName = "Ajay";
let temperature = null;
let state = undefined;
let age = 21;
let unique = Symbol();
let isStudent = true;
let bigNumber = 24142354646232n;
let obj = { firstName: "Ajay", lastName: "Panigrahi" };

console.log(
  firstName,
  temperature,
  state,
  age,
  unique,
  isStudent,
  bigNumber,
  obj
);

console.log(
  typeof firstName,
  typeof temperature,
  typeof state,
  typeof age,
  typeof unique,
  typeof isStudent,
  typeof bigNumber,
  typeof obj
);
