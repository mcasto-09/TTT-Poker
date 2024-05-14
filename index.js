let player = 'x'

function play (event) {
    const targetSqr = event.target
    targetSqr.innerText = player

    if (player === 'x') {
        player = 'o'
    } else {
        player = 'x'
    }

    let span = document.querySelector('#current-player')
    span.innerText = player;

    const winner = calculateWinner();
    if (winner) {
        alert(`${winner} wins!`);
        } else if (isBoardFull()) {
        alert('Tie!');
    }
    function isBoardFull() {
        for (const square of squares) {
          if (square.innerText === '') {
            return false;
          }
        }
        return true;
      }
}

let squares = document.querySelectorAll('.square')

function calculateWinner() {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const line of lines) {
        let = [a,b,c] = line
        let sqrA = squares[a].innerText
        let sqrB = squares[b].innerText
        let sqrC = squares[c].innerText

        if (sqrA !== '' && sqrA == sqrB && sqrA === sqrC) {
            return sqrA;
        }
      }
      return undefined
}

for (const square of squares) {
    square.addEventListener('click', play)
}