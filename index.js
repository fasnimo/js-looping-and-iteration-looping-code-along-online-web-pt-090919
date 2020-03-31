
// arr[ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )
function writeCards(names, event)  {
    let card = []
    for (let i = 0; i < names.length; i++) {
    card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return card;
}
// "Expected countDown(10) to invoke 11 console.logs"
function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
    return int;
}