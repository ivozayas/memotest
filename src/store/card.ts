import { create } from "zustand";
import { CardType } from "../../types";

export const cardStore = create((set) => ({
    cards: [
        {
            id: 'asdasd1',
            category: 'hannibal',
            flipped: false,
            done: false,
        },
        {
            id: 'asdasd',
            category: 'hannibal',
            flipped: false,
            done: false,
        },
        {
            id: 'asdasd2',
            category: 'arcane',
            flipped: false,
            done: false,
        },
        {
            id: 'as3dasd',
            category: 'arcane',
            flipped: false,
            done: false,
        },
    ],
    flippedCards: [],
    done: [],
    flipCard: (id: string) =>
        set((state: any) => {
            if (state.flippedCards.length >= 2) {
                return state
            }

            const flippedCard = state.cards.map((card: CardType) => 
                card.id === id ? { ...card, flipped: !card.flipped } : card
            )

            const flippedCards = [
                ...state.flippedCards,
                ...state.cards.filter((card: CardType) => card.id === id && !state.flippedCards.some((fc: CardType) => fc.id === card.id))
            ]
           
            if (flippedCards.length === 2) {
                const [card1, card2] = flippedCards
                
                if (card1.category === card2.category) {
                    set((state: any) => ({
                        cards: state.cards.map((card: CardType) =>
                            card.id === card1.id || card.id === card2.id ? { ...card, done: true } : card
                        ),
                        done: [...state.done, card1, card2],
                        flippedCards: [],
                    }))
                } else {
                    setTimeout(() => {
                        set((state: any) => ({
                            cards: state.cards.map((card: CardType) =>
                                card.id === card1.id || card.id === card2.id ? { ...card, flipped: false } : card
                            ),
                            flippedCards: [],
                        }));
                    }, 1500);
                }
            }
            
            return { cards: flippedCard, flippedCards };
        }),
}))