const button = document.querySelector(".button");
button.hidden = true;
const input = document.querySelector(".input-text");

function changeButtonState(value) {
  button.hidden = value;
}

function checkInput() {
  changeButtonState(!input.value);
}

input.addEventListener("input", checkInput);

function getInputText() {
  return input.value;
}

function addElementToPar(text) {
  const newText = document.createElement("p");
  newText.innerText = text;

  const wrapper = document.querySelector(".paragraphs-wrapper");
  wrapper.append(newText);
  newText.classList.add("text");
}

function clearInput() {
  input.value = "";
  button.hidden = true;
}

function deleteExtraPar() {
  const countOfPar = document.getElementsByClassName("text").length;

  if (countOfPar > 5) {
    const elem = document.querySelector(".text");
    elem.parentNode.removeChild(elem);
  }
}

function buttonClick() {
  const text = getInputText();
  addElementToPar(text);
  clearInput();
  deleteExtraPar();
}

button.addEventListener("click", buttonClick);
