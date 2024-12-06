//! imports
const reset = document.getElementById("clear");
const del = document.getElementById("deleteKey");
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const keys = document.querySelectorAll(".key");

del.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1);
});

keys.forEach((key) => {
  if (!key.classList.contains("fn")) {
    key.addEventListener("click", () => {
      result.textContent += key.attributes.keyIndex.value;
    });
  }
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

reset.addEventListener("click", () => {
  result.textContent = "";
});
