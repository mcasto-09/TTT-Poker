let player = 'x'

function play (event) {
    if (player === 'x') {
        player = 'o'
    } else {
        player = 'x'
    }
    let span = document.querySelector('#current-player')
    span.innerText = player;
    const targetSqr = event.target
    targetSqr.innerText = player
}

let squares = document.querySelectorAll('.square')

for (const square of squares) {
    square.addEventListener('click', play)
}