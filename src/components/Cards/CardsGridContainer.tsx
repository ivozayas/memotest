'use client'

import { cardStore } from "@/store/card";
import CardsGrid from "./CardsGrid";
import Reset from "./Reset";


export default function CardsGridContainer(){
    const cards = cardStore((state: any) => state.cards),
          done = cardStore((state: any) => state.done)

    return (
        <div>
            <CardsGrid/>

            {cards.length === done.length &&
                <Reset
                    children={
                        <div className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-300 duration-150 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.3)] rounded h-fit w-fit px-3 py-2">
                            <p>volver a jugar :P</p>
                        </div>
                    }
                />
            }
            
            {/* <div>cards {cards.length}</div>
            <div>done {done.length}</div> */}
        </div>
    )
}