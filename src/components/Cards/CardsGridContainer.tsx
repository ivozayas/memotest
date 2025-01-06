'use client'

import { cardStore } from "@/store/card";
import CardsGrid from "./CardsGrid";
import Reset from "./Reset";
import Win from "./Win";


export default function CardsGridContainer(){
    const won = cardStore((state: any) => state.won)

    return (
        <div className="flex flex-col justify-start items-center space-y-4">
            <CardsGrid/>

            {won &&
                <div>
                    <Reset
                    children={
                        <div className="flex justify-center items-center cardsinnerbg hover:brightness-125 duration-150 hover:shadow-[0px_1px_1px_1px_rgba(0,0,0,0.6)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.6)] rounded h-fit w-fit py-2 px-3 text-lg text-indigo-950">
                            <p>VOLVER A JUGAR</p>
                        </div>
                    }
                    />

                    <Win/>
                </div>
            }
        </div>
    )
}