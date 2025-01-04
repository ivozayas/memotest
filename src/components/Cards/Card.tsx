import { CardType } from "../../../types";
import { cardStore } from "@/store/card";

export default function Card({ card }: { card: CardType }){
    const flipCard = cardStore((state: any) => state.flipCard)

    return (
        <div
            className={`h-40 w-28 rounded flex items-center justify-center cursor-pointer  hover:brightness-110 ${card.flipped ? "scale-x-[-1]  duration-300" : "duration-150"} ${card.done ? 'bg-transparent' : 'bg-slate-400'}`}
            onClick={() => flipCard(card.id)}
        >{card.id}</div>
    )
}