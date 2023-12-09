let nameOfElement;
nameOfElement = "demo";
let person = {
  name: "John",
  age: 35,
  favoriteColor: "blue"
};

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "This is a bucket.";
  console.log(nameOfElement);
}

function printToConsole(input) {
    window.alert(person.name);
  console.log(person);
}

function printToConsole(input) {
    window.alert(person.age);
  console.log(person);
