import { CardType } from "../../../types";
import { cardStore } from "@/store/card";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card({ card }: { card: CardType }){
    const { flipCard, won } = cardStore()
 
    return (
        <div
            className={`cardsbg w-fit h-fit border-[5px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer duration-150 ${card.flipped ? "scale-x-[-1] border-b-yellow-800 border-r-yellow-800 border-t-yellow-600 border-l-yellow-600 border- shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]" : "hover:brightness-125 hover:shadow-[0px_1px_3px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.3)] border-t-blue-700 border-l-blue-900 border-b-blue-900 border-r-blue-700 hover:scale-105"} ${card.done && 'shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]'}`}
            onClick={() => !card.done && flipCard(card.id)}
        >
            {card.flipped ?
                <CardFront id={card.id} src={card.src} won={won}/> :
                <CardBack/>
            }
        </div>
    ) 
}