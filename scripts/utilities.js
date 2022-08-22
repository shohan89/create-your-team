// this function refers to grabbing an element by id
function grabbingTextId(id){

  var text = document.getElementById(id).innerText;
  return text;
}

// this function refers to get the input value in number type
function getInputValue (id) {
  
  const inputField = document.getElementById(id);
  const inputFieldValueStr = inputField.value;
  const inputFieldValue = parseInt(inputFieldValueStr);
  inputField.value = "";
  return inputFieldValue;
}

// this function refers to set the result to the target element
function setTextValue (id, result) {
  
  const playerExpensesElement = document.getElementById(id);
  playerExpensesElement.innerText = result;
  
}

// this function refers to disable the button when the player is already in the list
function disableButton(id){

  var button = document.getElementById(id);
  return button.classList.add("disabled");
}