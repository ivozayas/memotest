'use client'

import { cardStore } from "@/store/card"
import TimerText from "./TimeText"

export default function TimerList(){
    const { times } = cardStore()

    if(times.length == 0) return

    return (
        <div className="flex flex-col fixed inset-y-0 left-0 w-fit pl-2 py-4 m-5">
            <p className="text-lg text-yellow-400">RESULTADOS:</p>
            
            <ul className="overflow-y-scroll h-full pr-4 scroll">{ times.map((time: string, i: number) => 
                <TimerText key={i} time={time} number={times.length - i}/>
            )}</ul>
        </div>
    )
}