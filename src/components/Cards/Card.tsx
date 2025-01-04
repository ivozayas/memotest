import { CardType } from "../../../types";
import { cardStore } from "@/store/card";
import Image from "next/image";

export default function Card({ card }: { card: CardType }){
    const flipCard = cardStore((state: any) => state.flipCard)

    return (
        <div
            className={`cardsbg h-fit w-fit border-[4px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer ${card.flipped ? "scale-x-[-1] border-yellow-500 duration-300 shadow-[0px_1px_3px_1px_rgba(0,0,0,0.2)]" : "duration-100 hover:brightness-125 hover:shadow-[0px_1px_3px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.3)] border-blue-800 hover:scale-105"}`}
            onClick={() => !card.done && flipCard(card.id)}
        >
            {card.flipped ?
                <div className="cardsinnerbg"><Image alt={card.id} src={card.src} width={130} height={100}/></div> :
                <div className="rounded w-[130px] h-[185.85px] flex justify-center items-center text-[10rem] text-indigo-950 opacity-40"><b>?</b></div>
            }
        </div>
    ) 
}