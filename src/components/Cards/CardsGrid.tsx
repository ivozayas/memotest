'use client'

import { cardStore } from "@/store/card";
import { CardType } from "../../../types";
import Card from "./Card";

export default function CardsGrid() {
    const cards = cardStore((state: any) => state.cards),
          done = cardStore((state: any) => state.done),
          flippedCards = cardStore((state: any) => state.flippedCards)



    return (
        <div>
            <ul className="grid gap-4 grid-cols-5 w-fit h-fit">{
                cards.map((c: CardType, i: number) => 
                    <Card card={c} key={i}/>
                )
            }</ul>
            <div>cards {cards.length}</div>
            <div>done {done.length}</div>
            <div>flipped {flippedCards.length}</div>
        </div>
    )
}