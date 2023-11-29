let nameOfElement;
nameOfElement = "demo";

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "This is a bucket.";
  console.log(nameOfElement);
}

function printToConsole(input) {
    window.alert(input);
}
