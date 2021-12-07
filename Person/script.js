class Person {
  constructor(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
  }
}

let person1 = new Person("sreedhar", "vangala", 24, "male");
console.log(person1.firstname + " " + person1.lastname+ " " + person1.age + " " + person1.gender);
