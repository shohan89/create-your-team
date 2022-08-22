const playerNames = [];
// console.log(playerNames);


// add event listener to the button and create li element 
function addLi(element) {
    
  const playerName = element.parentNode.children[0].innerText;
  playerNames.push(playerName)
  // console.log(playerName);
  
  for (let i = 0; i < playerNames.length; i++) {
    if (playerNames[i] === playerName) {
      if ( i <= 4 ){
        const ol = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerHTML = `<li class="list-group-item bg-dark text-light">${i + 1}. ${playerName}</li>`;
        ol.appendChild(li);
        // console.log(playerNames);
      }
      else {
        
        alert("You can only add 5 players");
        return;
        
      }
    }
  }
  disableButton(element.id);
  
}

// Calculate per player expenses
function calculatePlayerExpenses(element) {

  const perPlayerCost = getInputValue('perPlayerCost');
  
  const playerName = element.parentNode.children[0].innerText;
  playerNames.push(playerName);

    for (let i = 0; i < playerNames.length; i++) {
      
      if (playerNames[i] === playerName) {

        if (isNaN(perPlayerCost)) {
          alert("Please enter your amount!");
          return;
        }
        else {

          const playerExpenses = perPlayerCost * (i);
          setTextValue('playerExpenses', playerExpenses);

        }
      }
    }
}

// Calculate Total Expenses
function calculateTotalExpenses(element) {

  const managerCost = getInputValue('managerCost');
  const coachCost = getInputValue('coachCost');
  if (isNaN(managerCost) || isNaN(coachCost)) {

    return alert("Please enter your amount!");

  }
  else {

    const totalPlayerExpense = parseInt(document.getElementById('playerExpenses').innerText);
    const totalExpense = managerCost + coachCost + totalPlayerExpense;
    setTextValue('totalExpense', totalExpense);

  }
}