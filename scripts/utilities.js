// this function refers to grabbing an element by id
function grabbingTextId(id){

  var text = document.getElementById(id).innerText;
  return text;
}

// this function refers to disable the button when the player is already in the list
function disableButton(id){

  var button = document.getElementById(id);
  return button.classList.add("disabled");
}