import { CardType } from "../../../types";
import { cardStore } from "@/store/card";
import Image from "next/image";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card({ card }: { card: CardType }){
    const flipCard = cardStore((state: any) => state.flipCard),
          won = cardStore((state: any) => state.won)

    return (
        <div
            className={`cardsbg h-fit w-fit border-[5px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer duration-200 ${card.flipped ? "scale-x-[-1] border-yellow-600 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]" : "hover:brightness-110 hover:shadow-[0px_1px_3px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.3)] border-blue-800 hover:scale-105"} ${card.done && 'shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]'}`}
            onClick={() => !card.done && flipCard(card.id)}
        >
            {card.flipped ?
                <CardFront id={card.id} src={card.src} won={won}/> :
                <CardBack/>
            }
        </div>
    ) 
}