export const shuffle = (cards: string[]) => {
    const cardsTemp = [...cards];
    for (let i = cardsTemp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsTemp[i], cardsTemp[j]] = [cardsTemp[j], cardsTemp[i]];
    }
    return cardsTemp;
  }