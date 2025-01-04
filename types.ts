export type CardType = {
    id: string;
    category: string;
    done: boolean;
    flipped: boolean;
    flipCard: () => void
};