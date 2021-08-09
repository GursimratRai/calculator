var button = document.getElementsByClassName("btn");
var display = document.getElementById("display");
var fop = 0;
var sop = null;
var op = null;
var resullt = null;
var error = NaN;
function cal(e) {
  var value = "";
  if (e.type == "click") {
    value = this.getAttribute("data-value");
  }
  if (value == "+" || e.key == "+") {
    op = "+";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "-" || e.key == "-") {
    op = "-";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "*" || e.key == "*") {
    op = "*";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "/" || e.key == "/") {
    op = "/";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "+/-") {
    op = "+/-";
    fop = -1 * parseFloat(display.innerText);
    display.innerText = fop;
  } else if (value == "%" || e.key == "%") {
    op = "%";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "ac" || e.key === "Backspace") {
    op = "ac";
    fop = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "=" || e.key == "=" || e.key == "Enter") {
    sop = parseFloat(display.innerText);
    result = eval(fop + op + sop);
    if (op == "" || Number.isNaN(result)) {
      display.innerText = "Error";
    } else {
      display.innerText = result;
    }
  } else {
    if ((e.key >= "0" && e.key <= "9") || e.key == ".") {
      display.innerText += e.key;
    } else {
      display.innerText += value;
    }
  }
}

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", cal);
}
document.onkeypress = cal;
