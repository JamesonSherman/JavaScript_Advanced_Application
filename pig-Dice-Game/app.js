/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
- Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost.
- After that, it's the next player's turn
- The player can choose to 'Hold', which means that his
 ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//score-0 edits the total player value 
//current-0 edits the given dice value
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; 
// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.add('active');

var scores, roundescore, activePlayer,dice, gamePlaying;
scores = [0,0];
roundscore = 0;
activePlayer = 0;


function NextPlayer () {
    //next player
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

    }
    
function btn() {
    if(gamePlaying) {
    //rando num
    var dice = Math.floor(Math.random() * 6 ) + 1;
    //display result
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    //update the round score IF the rolled um is not 1
    if(dice === 1){
        NextPlayer();
    } else {
    roundscore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundscore;
    }
  }
}

function checkwinperam(){
    roundscore = 0;
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        roundscore = 0;
        NextPlayer();
    }
}

function btnhold() {
    if (gamePlaying) {
  //add CURRENT score to GLOBAL score
    scores[activePlayer] += roundscore;
  // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 //NextPlayer
checkwinperam();
  //check if player won the game
    }

}


function resetbtn() {
    gamePlaying = true;
 scores = [0,0];
 activePlayer = 0;
 roundscore = 0;
 document.querySelector('.dice').style.display = 'none';
 
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.getElementById('name-0').textContent = 'Player 1';
 document.getElementById('name-1').textContent = 'Player 2';
 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}

resetbtn();
//class for button is btn-roll
document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-hold').addEventListener('click', btnhold);
document.querySelector('.btn-new').addEventListener('click', resetbtn);
