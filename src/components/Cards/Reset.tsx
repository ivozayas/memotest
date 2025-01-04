'use client'

import { cardStore } from "@/store/card";


export default function Reset({ children }: { children?: React.ReactNode }){
    const reset = cardStore((state: any) => state.resetGame)

    return (
        <button className="flex justify-center items-center" onClick={reset}>{ children }</button>
    )
}