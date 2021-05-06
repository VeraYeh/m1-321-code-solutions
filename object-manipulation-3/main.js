console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Cece', hand: [], points: 0 },
  { name: 'Schimt', hand: [], points: 0 },
  { name: 'Jess', hand: [], points: 0 },
  { name: 'Coach', hand: [], points: 0 }
];

var cards = [
  { rank: 'Ace', suit: 'Clubs' },
  { rank: 2, suit: 'Clubs' },
  { rank: 3, suit: 'Clubs' },
  { rank: 4, suit: 'Clubs' },
  { rank: 5, suit: 'Clubs' },
  { rank: 6, suit: 'Clubs' },
  { rank: 7, suit: 'Clubs' },
  { rank: 8, suit: 'Clubs' },
  { rank: 9, suit: 'Clubs' },
  { rank: 10, suit: 'Clubs' },
  { rank: 'Jack', suit: 'Clubs' },
  { rank: 'Queen', suit: 'Clubs' },
  { rank: 'King', suit: 'Clubs' },
  { rank: 'Ace', suit: 'Diamonds' },
  { rank: 2, suit: 'Diamonds' },
  { rank: 3, suit: 'Diamonds' },
  { rank: 4, suit: 'Diamonds' },
  { rank: 5, suit: 'Diamonds' },
  { rank: 6, suit: 'Diamonds' },
  { rank: 7, suit: 'Diamonds' },
  { rank: 8, suit: 'Diamonds' },
  { rank: 9, suit: 'Diamonds' },
  { rank: 10, suit: 'Diamonds' },
  { rank: 'Jack', suit: 'Diamonds' },
  { rank: 'Queen', suit: 'Diamonds' },
  { rank: 'King', suit: 'Diamonds' },
  { rank: 'Ace', suit: 'Hearts' },
  { rank: 2, suit: 'Hearts' },
  { rank: 3, suit: 'Hearts' },
  { rank: 4, suit: 'Hearts' },
  { rank: 5, suit: 'Hearts' },
  { rank: 6, suit: 'Hearts' },
  { rank: 7, suit: 'Hearts' },
  { rank: 8, suit: 'Hearts' },
  { rank: 9, suit: 'Hearts' },
  { rank: 10, suit: 'Hearts' },
  { rank: 'Jack', suit: 'Hearts' },
  { rank: 'Queen', suit: 'Hearts' },
  { rank: 'King', suit: 'Hearts' },
  { rank: 'Ace', suit: 'Spade' },
  { rank: 2, suit: 'Spade' },
  { rank: 3, suit: 'Spade' },
  { rank: 4, suit: 'Spade' },
  { rank: 5, suit: 'Spade' },
  { rank: 6, suit: 'Spade' },
  { rank: 7, suit: 'Spade' },
  { rank: 8, suit: 'Spade' },
  { rank: 9, suit: 'Spade' },
  { rank: 10, suit: 'Spade' },
  { rank: 'Jack', suit: 'Spade' },
  { rank: 'Queen', suit: 'Spade' },
  { rank: 'King', suit: 'Spade' }
];

function playCards(players, cardsPerHand) {

  // 1) distribute cards
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < cardsPerHand; j++) {
      var k = Math.floor(Math.random() * cards.length);
      players[i].hand.push(cards[k]);
      cards.splice(k, 1);
    }
  }

  // 2) count points
  for (var m = 0; m < players.length; m++) {
    for (var n = 0; n < cardsPerHand; n++) {
      if (players[m].hand[n].rank === 'Ace') {
        players[m].points += 11;
      } else if (players[m].hand[n].rank === 'Jack' || players[m].hand[n].rank === 'Queen' || players[m].hand[n].rank === 'King') {
        players[m].points += 10;
      } else {
        players[m].points += players[m].hand[n].rank;
      }
    }
  }

  // 3) find largest points
  var largest = 0;
  for (var x = 0; x < players.length; x++) {
    if (players[x].points > largest) {
      largest = players[x].points;
    }
  }

  // 4) find winners who have largest points
  var winner = [];
  for (var y = 0; y < players.length; y++) {
    if (players[y].points === largest) {
      winner.push(players[y].name);
    }
  }

  return 'Winning players: ' + winner.join(', ');
}

console.log(playCards(players, 2));
