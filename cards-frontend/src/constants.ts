export const IMAGE_PATH = 'src/assets/cards/'
export const IMAGE_EXTENSION = '.png'
export const SUITS = {
    C: 'clubs',
    D: 'diamonds',
    H: 'hearts',
    S: 'spades'
}
export const RANKS = {
    1: 'ace',
    J: 'jack',
    Q: 'queen',
    K: 'king',
};
export const CARDS = [
  '10C', '10D', '10H', '10S', '2C', '2D', '2H',
  '2S',  '3C',  '3D',  '3H',  '3S', '4C', '4D',
  '4H',  '4S',  '5C',  '5D',  '5H', '5S', '6C',
  '6D',  '6H',  '6S',  '7C',  '7D', '7H', '7S',
  '8C',  '8D',  '8H',  '8S',  '9C', '9D', '9H',
  '9S',  '1C',  '1D',  '1H',  '1S', 'JC', 'JD',
  'JH',  'JS',  'KC',  'KD',  'KH', 'KS', 'QC',
  'QD',  'QH',  'QS'
]
export const GAMES = [
    {
        name: 'Poker',
        key: 'poker',
        description: 'A fast-paced card game where each player starts with 5 cards. Similar to UNO, players take turns matching and playing cards strategically. The first player to get rid of all their cards wins.',
        image: 'src/assets/background1.jpg'        
    },
    {
        name: 'Penalty',
        key: 'penalty',
        description: 'A fun challenge game where every card carries a rule or action. Players draw and follow card instructions, but breaking any active rule earns a penalty. The player with no cards left wins.',
        image: 'src/assets/background2.jpg'        
    },
    {
        name: 'Gulam Chor',
        key: 'gulam-chor',
        description: 'A classic pairing game. Players form matching pairs and discard them while drawing cards from each other. One special card remains unpaired—the player left holding it at the end becomes the "Gulam Chor" (the loser).',
        image: 'src/assets/background3.jpg'        
    },
    {
        name: 'Satti Lavani',
        key: 'satti-lavani',
        description: 'A traditional sequencing card game. All seven cards of each suit are placed as starting points, and players take turns arranging the remaining cards in ascending and descending order. The first player to play all their cards wins.',
        image: 'src/assets/background4.jpg'        
    },
]