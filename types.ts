export type CardType = {
    id: string;
    category: string;
    src: string;
    done: boolean;
    flipped: boolean;
    flipCard: () => void
};