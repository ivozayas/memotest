'use client'

import Image from "next/image"

export default function HomeHeader({ show, setShow }: {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}){
    const imageStyle = { width: '140px', height: '200px' }

    return ( 
        <div className="flex items-center cardsinnerbg px-6 pt-6 pb-7 text-indigo-900 text-[2rem] rounded shadow-[0px_1px_8px_4px_rgba(0,0,0,0.4)] space-x-7">
            <Image
                alt="sonic"
                src='/sonic.png'
                width={140}
                height={200}
                style={imageStyle}
                className="scale-x-[-1]"
            />

            <div className="flex flex-col items-center justify-start h-[90%]">
                <p className="text-[3.2rem]">HOLA, TE AMO MUCHO :)</p>
                
                <div className="flex flex-row">
                    <button className={`${!show && 'animate-pulse hover:animate-none'}`} onClick={() => !show && setShow(true)}>PERO...</button>
                </div>
                
                { show && <p>VAMOS A VER QUE TAN VELOZ ERES...</p> }       
            </div>

            <Image
                alt="tails"
                src='/tails.png'
                width={140}
                height={200}
                style={imageStyle}   
            />
        </div>
    )
}