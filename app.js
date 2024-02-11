const buttons = document.querySelectorAll(".btn");
const btnEqual = document.querySelector(".btn-equal");
const btnReset = document.querySelector(".btn-reset");
const btnDelete = document.querySelector(".btn-del");

buttons.forEach((btn) => {
  btn.addEventListener(
    "click",
    () => (document.display.text.value += btn.value)
  );
});

btnEqual.addEventListener(
  "click",
  () => (document.display.text.value = eval(display.text.value))
);
btnReset.addEventListener("click", () => (document.display.text.value = ""));
btnDelete.addEventListener("click", () => del());

function del() {
  let value = document.querySelector(".display__result").value;
  document.querySelector(".display__result").value = value.substr(
    0,
    value.length - 1
  );
}

const themeBtn = document.querySelectorAll(".theme__btn");

themeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("current-btn");

    if (btn.classList.contains("current-btn")) {
      themeBtn.forEach((btn) => {
        btn.classList.remove("current-btn");
      });
      btn.classList.add("current-btn");
    }
  });
});
