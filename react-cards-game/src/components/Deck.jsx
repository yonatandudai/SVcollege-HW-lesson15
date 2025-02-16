export function createDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    let values = [
        "Ace","2", "3", "4", "5", "6", "7",
        "8", "9", "10", "Jack", "Queen", "King"
    ];
    const deck = [];
    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 4; j++) {
            const myCard = { value: values[i], type: suits[j] };
            deck.push(myCard);
        }
    }
    return deck;
}

export function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
