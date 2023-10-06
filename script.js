let op;

function calc() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      alert("Введите число");
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        alert("Деление на 0 недопустимо");
      } else result = num1 / num2;
      break;
  }

  document.getElementById("result").innerHTML = result;
}
