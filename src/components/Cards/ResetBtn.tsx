'use client'

import { cardStore } from "@/store/card";


export default function ResetBtn({ children }: { children?: React.ReactNode }){
    const { resetGame } = cardStore()

    return (
        <button className="flex justify-center items-center" onClick={resetGame}>{ children }</button>
    )
}