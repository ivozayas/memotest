import { create } from "zustand";
import { CardType } from "../../types";

interface CardState {
    cards: CardType[]
    flippedCards: CardType[]
    done: CardType[]
    won: boolean
    times: string[]
    setTimes: (time: string) => void
    flipCard: (id: string) => void
    resetGame: () => void
}

const cards: CardType[] = [
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
    {
        id: 'pepper',
        category: 'smiling-friends',
        src: '/pepper.png',
        flipped: false,
        done: false,
    },
    {
        id: 'salt',
        category: 'smiling-friends',
        src: '/salt.png',
        flipped: false,
        done: false,
    },
    {
        id: 'jayce',
        category: 'arcane',
        src: '/jayce.png',
        flipped: false,
        done: false,
    },
    {
        id: 'viktor',
        category: 'arcane',
        src: '/viktor.png',
        flipped: false,
        done: false,
    },
    {
        id: 'zuko',
        category: 'avatar',
        src: '/zuko.png',
        flipped: false,
        done: false,
    },
    {
        id: 'sokka',
        category: 'avatar',
        src: '/sokka.png',
        flipped: false,
        done: false,
    },
    {
        id: 'juanma',
        category: 'millennials',
        src: '/juanma.png',
        flipped: false,
        done: false,
    },
    {
        id: 'rodri',
        category: 'millennials',
        src: '/rodri.png',
        flipped: false,
        done: false,
    },
    {
        id: 'enderman',
        category: 'minecraft',
        src: '/enderman.png',
        flipped: false,
        done: false,
    },
    {
        id: 'golem',
        category: 'minecraft',
        src: '/golem.png',
        flipped: false,
        done: false,
    },
]

export const cardStore = create<CardState>((set) => ({
    cards: cards.sort((() => Math.random() - 0.5)),
    flippedCards: [],
    done: [],
    won: false,
    times: [],
    setTimes: (time: string) => 
        set((state) => ({
            times: [time, ...state.times]
        })),
    flipCard: (id: string) =>
        set((state) => {
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

            if (flippedCards.length === state.done.length + 2) {
                const [card1, card2] = flippedCards.slice(flippedCards.length - 2, flippedCards.length)
                
                if (card1.category === card2.category) {
                    const updatedCards = state.cards.map((card: CardType) =>
                        card.id === card1.id || card.id === card2.id ? { ...card, done: true, flipped: true } : card
                    )

                    const updatedCard1 = updatedCards.find((card: CardType) => card.id === card1.id)!
                    const updatedCard2 = updatedCards.find((card: CardType) => card.id === card2.id)!

                    const newDone = [...state.done, updatedCard1, updatedCard2]

                    const won = newDone.length === state.cards.length;

                    return {
                        cards: updatedCards,
                        done: newDone,
                        flippedCards: [...state.flippedCards, updatedCard1],
                        won,
                    }
                } else {
                    setTimeout(() => {
                        set((state) => ({
                            cards: state.cards.map((card: CardType) =>
                                card.id === card1.id || card.id === card2.id ? { ...card, flipped: false} : card
                            ),
                            flippedCards: state.flippedCards.slice(0, -2)
                        }))
                    }, 300)
                }
            }

            const curFlippedCard = state.cards.map((card: CardType) => 
                card.id === id ? { ...card, flipped: !card.flipped } : card
            )
            
            return { cards: curFlippedCard, flippedCards }
        }),
    resetGame: () =>
        set((state) => ({
            cards: state.cards.map((card: CardType) => ({
                ...card,
                flipped: false,
                done: false,
            })).sort((() => Math.random() - 0.5)),
            flippedCards: [],
            done: [],
            won: false,
        }))
}))