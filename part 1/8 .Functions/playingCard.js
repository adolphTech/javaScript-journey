function getCard() {
    const values = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];
    const valIdx = Math.floor(Math.random() * values.length);
    const value =values[valIdx];


    const suits = ['clubs','spades','hearts','diamonds'];
    const suitIdy = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdy];

    console.log(`${value} of ${suit}`)
    return{
        value:value, suit:suit
    };
};

getCard();
