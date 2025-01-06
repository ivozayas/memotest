import { CardType } from "../../../types";
import { cardStore } from "@/store/card";
import Image from "next/image";

export default function Card({ card }: { card: CardType }){
    const flipCard = cardStore((state: any) => state.flipCard),
          won = cardStore((state: any) => state.won)

    return (
        <div
            className={`cardsbg h-fit w-fit border-[5px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer duration-200 ${card.flipped ? "scale-x-[-1] border-yellow-600 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]" : "hover:brightness-110 hover:shadow-[0px_1px_3px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.3)] border-blue-800 hover:scale-105"} ${card.done && 'shadow-[0px_1px_5px_3px_rgba(0,0,0,0.2)]'} ${card.show && 'scale-150 z-50'}`}
            onClick={() => !card.done && flipCard(card.id)}
        >
            {card.flipped ?
                <div className="cardsinnerbg relative flex justify-center">
                    <Image alt={card.id} src={card.src} width={130} height={100} className={`relative z-50 ${won && 'hover:scale-110 hover:brightness-110 duration-200'}`}/>
                    <Image alt={'gay'} src='/gayicon.png' width={110} height={50} className="absolute top-10 right-auto z-40 opacity-10 scale-x-[-1]"/>
                </div> :
                <div className="rounded w-[130px] h-[185.85px] flex justify-center items-center text-[10rem] opacity-30 relative">
                    <Image alt={'gay'} src='/gayicon.png' width={110} height={50} className="absolute top-auto left-auto z-50"/>
                </div>
            }
        </div>
    ) 
}