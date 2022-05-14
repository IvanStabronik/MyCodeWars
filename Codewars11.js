// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
    if (card.includes('♣') === true ) {
        return 'clubs';
    } else if (card.includes('♦') === true) {
        return 'diamonds';
    } else if (card.includes('♥') === true) {
        return 'hearts'
    } else if (card.includes('♠') === true) {
        return 'spades';
    }
}