'use client'

import { cardStore } from "@/store/card";
import CardsGrid from "./CardsGrid";
import Reset from "./ResetBtn";
import Win from "./Win";
import BtnContainer from "../BtnContainer";
import Timer from "./Timer";

export default function CardsGridContainer(){
    const won = cardStore((state: any) => state.won),
          cards = cardStore((state: any) => state.cards)


    return (
        <div className="flex flex-col justify-start items-center space-y-4">
            <CardsGrid cards={cards}/>

            <div className="flex flex-row items-center justify-center space-x-6">
                <Timer/>

                {won &&
                    <div>
                        <Reset
                            children={<BtnContainer children={<p className="px-3 py-1">VOLVER A JUGAR</p>}/>}
                        />

                        <Win/>
                    </div>
                }
            </div>
         
        </div>
    )
}