// Code your solutions in this file

function writeCards(names, event)  {
    let card = []
    for (let i = 0; i < names.length; i++) {
    card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return card;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--
    }
    return int;
}