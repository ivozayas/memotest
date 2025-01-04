import { create } from "zustand";
import { CardType } from "../../types";

export const cardStore = create((set) => ({
    cards: [
        {
            id: 'hannibal',
            category: 'hannibal',
            src: '/hannibal.png',
            flipped: false,
            done: false,
        },
        {
            id: 'will',
            category: 'hannibal',
            src: '/will.png',
            flipped: false,
            done: false,
        },
        {
            id: 'sonic',
            category: 'sonic',
            src: '/sonic.png',
            flipped: false,
            done: false,
        },
        {
            id: 'tails',
            category: 'sonic',
            src: '/tails.png',
            flipped: false,
            done: false,
        },
        {
            id: 'kakashi',
            category: 'naruto',
            src: '/kakashi.png',
            flipped: false,
            done: false,
        },
        {
            id: 'iruka',
            category: 'naruto',
            src: '/iruka.png',
            flipped: false,
            done: false,
        },
        {
            id: 'walter',
            category: 'breaking-bad',
            src: '/walter.png',
            flipped: false,
            done: false,
        },
        {
            id: 'jesse',
            category: 'breaking-bad',
            src: '/jesse.png',
            flipped: false,
            done: false,
        },
    ],
    flippedCards: [],
    done: [],
    flipCard: (id: string) =>
        set((state: any) => {
            if (state.flippedCards.length >= state.done.length + 2) {
                return state
            }
            
            if(state.flippedCards[state.flippedCards.length - 1] && state.flippedCards[state.flippedCards.length - 1].id === id){
                const updatedCards = state.cards.map((card: CardType) =>
                    card.id === id ? { ...card, flipped: false } : card
                )

                const updatedFlippedCards = state.flippedCards.filter((card: CardType) => card.id !== id)

                return { cards: updatedCards, flippedCards: updatedFlippedCards }
            }

            const flippedCards = [
                ...state.flippedCards,
                ...state.cards.filter((card: CardType) => card.id === id && !state.flippedCards.some((fc: CardType) => fc.id === card.id))
            ]

            // transformar en funcion auxiliar (evaluateCards)
            if (flippedCards.length === state.done.length + 2) {
                const [card1, card2] = flippedCards.slice(flippedCards.length - 2, flippedCards.length)
                
                if (card1.category === card2.category) {
                    const updatedCards = state.cards.map((card: CardType) =>
                        card.id === card1.id || card.id === card2.id ? { ...card, done: true, flipped: true } : card
                    )

                    const updatedCard1 = updatedCards.find((card: CardType) => card.id === card1.id)!

                    const updatedCard2 = updatedCards.find((card: CardType) => card.id === card2.id)!

                    return {
                        cards: updatedCards,
                        done: [...state.done, updatedCard1, updatedCard2],
                        flippedCards: [...state.flippedCards, updatedCard1]
                    }
                } else {
                    setTimeout(() => {
                        set((state: any) => ({
                            cards: state.cards.map((card: CardType) =>
                                card.id === card1.id || card.id === card2.id ? { ...card, flipped: false} : card
                            ),
                            flippedCards: state.flippedCards.slice(0, -2) // no tengo que limpiarlo, sino quitar la última (la actual no la agregué aún)
                        }))
                    }, 500)
                }
            }

            // no llegué a dos cartas dadas vueltas
            const curFlippedCard = state.cards.map((card: CardType) => 
                card.id === id ? { ...card, flipped: !card.flipped } : card
            )
            
            return { cards: curFlippedCard, flippedCards }
        }),
    evaluateCards: () => {}
}))