const playerNames = [];

function addLi(element) {
    
  const playerName = element.parentNode.children[0].innerText;
  
  playerNames.push(playerName);
  
  for (let i = 0; i < playerNames.length; i++) {
    if (playerNames[i] === playerName) {
      if ( i >= 5 ){
        return alert("You can only add 5 players");
      }
      else {

        const ol = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerHTML = `<li class="list-group-item bg-dark text-light">${i + 1}. ${playerName}</li>`;
        ol.appendChild(li);
        
      }
    }
  }
  disableButton(element.id);

}

// Calculate button calculation
function calculatePlayerExpenses(element) {

  const perPlayerCost = getInputValue('perPlayerCost');
  
  const playerName = element.parentNode.children[0].innerText;
  playerNames.push(playerName);

    for (let i = 0; i < playerNames.length; i++) {
      
      if (playerNames[i] === playerName) {

        if (isNaN(perPlayerCost)) {
          return alert("Please enter your amount!");
        }
        else {

          const playerExpenses = perPlayerCost * (i);
          const playerExpensesElement = document.getElementById('playerExpenses');
          playerExpensesElement.innerText = playerExpenses;

        }
      }
    }
}