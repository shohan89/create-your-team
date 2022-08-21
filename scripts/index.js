const playerNames = [];
function addLi(element) {
    
  const playerName = element.parentNode.children[0].innerText;
  // console.log(playerName);
  playerNames.push(playerName);
  // console.log(playerNames);
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
        // console.log(playerName);
        // console.log((i + 1) * 1000);
      }
    }
  }
  disableButton(element.id);
}