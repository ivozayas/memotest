import Image from "next/image"

export default function CardBack(){
    return (
        <div className="rounded w-[130px] h-[185.85px] flex justify-center items-center text-[10rem] opacity-30 relative">
            <Image alt={'gay'} src='/gayicon.png' width={110} height={50} className="absolute top-auto left-auto z-50"/>
        </div>
    )
}