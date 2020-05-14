const result = document.querySelector("#res");
valorInput = "";
operacion = "";
function setNumber(num) {
  valorInput += num;
  result.innerHTML = valorInput;
}
function clr() {
  valorInput = "";
  result.innerHTML = valorInput;
}
function equal() {
  let numbers = valorInput.split(operacion);
  var digit1 = parseInt(numbers[0], 2);
  var digit2 = parseInt(numbers[1], 2);
  let resOperacion = 0;
  switch (operacion) {
    case "+":
      resOperacion = digit1 + digit2;
      break;
    case "-":
      resOperacion = digit1 - digit2;
      break;
    case "*":
      resOperacion = digit1 * digit2;
      break;
    case "/":
      resOperacion = Math.floor(digit1 / digit2);
      break;
  }
  var bin = resOperacion.toString(2);
  valorInput = bin;
  result.innerHTML = valorInput;
}
function setOperation(oper) {
  operacion = oper;
  valorInput += oper;
  result.innerHTML = valorInput;
}
