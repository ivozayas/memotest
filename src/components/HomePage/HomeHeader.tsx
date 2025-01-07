'use client'

import Image from "next/image"

export default function HomeHeader({ show, setShow }: {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}){
    return ( 
        <div className="flex flexrow items-center cardsinnerbg p-4 text-indigo-900 text-[2rem] rounded shadow-[0px_1px_8px_4px_rgba(0,0,0,0.4)] space-x-5">
            <Image alt="sonic" src='/sonic.png' width={140} height={100} className="scale-x-[-1]"/>

            <div className="flex flex-col items-center justify-center">
                <p className="text-[4rem]">HOLA, TE AMO MUCHO :)</p>
                
                <div className="flex flex-row">
                    <button className={`${!show && 'animate-pulse hover:animate-none'}`} onClick={() => !show && setShow(true)}>PERO...</button>
                </div>
                
                { show && <p>VAMOS A VER QUE TAN INTELIGENTE SOS...</p> }       
            </div>

            <Image alt="tails" src='/tails.png' width={140} height={100}/>
        </div>
    )
}