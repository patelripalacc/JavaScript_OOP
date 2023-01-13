console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Parson {
  name;
  pets;
  residence;
  hobbies;

  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter((Element) => Element !== hobby);
  }

  Greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Parson {
  occupation;

  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }

  Greeting() {
    console.log("Hello fellow Coders!!");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let parson = new Parson("Ripalkumar Patel", 0, "Indiana", [
  "play",
  "running",
  "watch movie",
]);
console.log(parson);
console.log(parson.hobbies);

parson.addHobby("cricket");

parson.removeHobby("running");

parson.Greeting();

let coder = new Coder(
  "Ripalkumar Patel",
  0,
  "Indiana",
  ["play", "running", "watch movie"],
  "Full Stack Web Developer"
);
console.log(coder);
console.log(coder.hobbies);

coder.addHobby("coding");

coder.removeHobby("watch movie");

coder.Greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor(add, subtract, multiply, divide) {
    this.result = 0;
  }
  add(a, b) {
    let result;
    if (b == undefined) {
      result = this.result + a;
    } else {
      result = a + b;
    }

    this.result = result;
    return this.result;
  }

  subtract(a, b) {
    let result;
    if (b == undefined) {
      result = this.result - a;
    } else {
      result = a - b;
    }

    this.result = result;
    return this.result;
  }

  multiply(a, b) {
    let result;
    if (b == undefined) {
      result = this.result * a;
    } else {
      result = a * b;
    }

    this.result = result;
    return this.result;
  }

  divide(a, b) {
    let result;
    if (b == undefined) {
      result = this.result / a;
    } else {
      result = a / b;
    }

    this.result = result;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

let calculator = new Calculator();
console.log(calculator);

calculator.add(4, 25);
calculator.displayResult();

calculator.subtract(21, 4);
calculator.displayResult();

calculator.multiply(10, 25);
calculator.displayResult();

calculator.divide(324, 30);
calculator.displayResult();

calculator.add(25);
calculator.displayResult();

calculator.subtract(4);
calculator.displayResult();

calculator.multiply(10);
calculator.displayResult();

calculator.divide(32);
calculator.displayResult();
