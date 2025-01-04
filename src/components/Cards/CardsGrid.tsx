'use client'

import { cardStore } from "@/store/card";
import { CardType } from "../../../types";
import Card from "./Card";

export default function CardsGrid() {
    const cards = cardStore((state: any) => state.cards)

    return (
        <div>
            <ul className="grid gap-5 grid-cols-6 w-fit h-fit">{
                cards.map((c: CardType, i: number) => 
                    <Card card={c} key={i}/>
                )
            }</ul>
        </div>
    )
}