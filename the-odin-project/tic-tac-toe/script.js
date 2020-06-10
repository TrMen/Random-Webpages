const Player = (name, marker) => {
  let wins = 0;
  const winnerDisplay = document.getElementById('winner-display');

  const winsDisplay = document.querySelector(`#player-${marker.toLowerCase()}-display .wins`);
  winsDisplay.textContent = wins;

  document.querySelector(`#player-${marker.toLowerCase()}-display .name`).textContent = name;

  const getName = () => name;
  const getWins = () => wins;
  const getMarker = () => marker;
  const won = () => {
    wins += 1;
    winsDisplay.textContent = wins;
    winnerDisplay.textContent = `The winner is: ${name}`;
    winnerDisplay.classList.add('winner-declared');
  };
  return {
    getName, getWins, won, getMarker,
  };
};

const IntroScreen = (() => {
  const intro = document.getElementById('player-choice');

  const hide = () => {
    playerX = Player(document.getElementById('player-x').value || "Bob's Brother", 'X');
    playerO = Player(document.getElementById('player-o').value || 'Bob', 'O');

    intro.classList.add('hidden');
  };

  const show = () => {
    intro.classList.remove('hidden');
  };

  document.getElementById('ready-button').addEventListener('click', () => {
    hide();
    Gameboard.startGame();
  });

  return { show, hide };
})();

const Gameboard = ((startMarker) => {
  let playerMoves = Array.from({ length: 9 }).map(() => '');

  const tiles = document.querySelectorAll('div [data-index]');

  const playerODisplay = document.getElementById('player-o-display');
  const playerXDisplay = document.getElementById('player-x-display');

  const winnerDisplay = document.getElementById('winner-display');

  let winner = null;

  let currentMarker = startMarker;

  let active = false;

  const startGame = () => {
    playerMoves = Array.from({ length: 9 }).map(() => '');
    playerODisplay.classList.remove('players-turn');
    playerXDisplay.classList.add('players-turn');
    currentMarker = 'X';
    if (!active) {
      active = true;
      winner = null;
      document.getElementById('start').textContent = 'Reset Game';
      winnerDisplay.textContent = 'Game Ongoing';
      winnerDisplay.classList.remove('winner-declared');
    }
    render();
  };

  const switchPlayer = () => {
    currentMarker = currentMarker === 'X' ? 'O' : 'X';
    if (currentMarker === 'X') {
      playerXDisplay.classList.add('players-turn');
      playerODisplay.classList.remove('players-turn');
    } else {
      playerODisplay.classList.add('players-turn');
      playerXDisplay.classList.remove('players-turn');
    }
  };

  const addMarker = (event) => {
    const tileIndex = event.target.dataset.index;
    if (playerMoves[tileIndex] === '') {
      if (!active || winner) return;
      playerMoves[tileIndex].textContent = currentMarker;
      playerMoves[tileIndex] = currentMarker;

      winner = checkVictory();
      if (winner) {
        active = false;

        if (winner !== 'Tie') {
          const winningPlayer = winner === playerX.getMarker() ? playerX : playerO;
          winningPlayer.won();
        } else {
          winnerDisplay.textContent = 'The game was a Tie!';
          winnerDisplay.classList.add('winner-declared');
        }
      } else switchPlayer();
      render();
    }
  };
  tiles.forEach((tile) => tile.addEventListener('click', addMarker));

  const checkVictory = () => {
    for (let row = 0; row < 3; row += 1) {
      if (playerMoves[row * 3] && playerMoves[row * 3] === playerMoves[row * 3 + 1]
        && playerMoves[row * 3 + 1] === playerMoves[row * 3 + 2]) return playerMoves[row * 3];
    }
    for (let column = 0; column < 3; column += 1) {
      if (playerMoves[column] && playerMoves[column] === playerMoves[column + 3]
        && playerMoves[column + 3] === playerMoves[column + 6]) return playerMoves[column];
    }
    if (playerMoves[0] && playerMoves[0] === playerMoves[4]
      && playerMoves[4] === playerMoves[8]) return playerMoves[0];
    if (playerMoves[6] && playerMoves[6] === playerMoves[4]
      && playerMoves[4] === playerMoves[2]) return playerMoves[6];
    if (playerMoves.filter((move) => !!move).length === playerMoves.length) return 'Tie';
    return null;
  };

  const render = () => {
    playerMoves.forEach((tile, index) => { tiles[index].textContent = tile; });
  };

  return { render, startGame };
})('X');

Gameboard.render();

document.getElementById('start').addEventListener('click', Gameboard.startGame);

document.getElementById('select-names').addEventListener('click', IntroScreen.show);

// Hide intro window on ESC
window.addEventListener('keydown', (event) => { if (event.keyCode === 27) IntroScreen.hide(); });

let playerX;
let playerO;
