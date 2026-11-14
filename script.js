let input = document.querySelector("input");
let buttons = document.querySelectorAll("button"); //returns a nodelist

let string = "";

let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let clicked = e.target.textContent;

    if (clicked == "=") {
      string = String(eval(string));
      input.value = string;
    } else if (clicked == "AC") {
      string = "";
      input.value = "0";
    } else if (clicked == "DEL") {
      if ((string = "infinity")) string = "";
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += clicked;
      input.value = string;
    }
  });
});
