import Image from "next/image"

export default function CardFront({ id, src, won }: {
    id: string,
    src: string,
    won: boolean
}){
    return (
        <div className="cardsinnerbg relative flex justify-center">
            <Image alt={id} src={src} width={130} height={100} className={`relative z-50 ${won && 'hover:scale-110 hover:brightness-110 duration-200'}`}/>
            <Image alt={'gay'} src='/gayicon.png' width={110} height={50} className="absolute top-10 right-auto z-40 opacity-10 scale-x-[-1]"/>
        </div>  
    )
}