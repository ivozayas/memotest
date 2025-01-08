import Image from "next/image"

export default function CardBack(){
    return (
        <div className="rounded w-[130px] h-[186px] flex justify-center items-center text-[1.3rem] opacity-30 relative">
            <div className="flex flex-col absolute top-9 left-auto items-center justify-center">
                <Image
                    alt={'gay'}
                    src='/gayicon.png'
                    width={100}
                    height={95}
                    style={{ width: '100px', height: '95px'}}
                    priority
                />

                <p>MEMOGAY</p>
            </div>
        </div>
    )
}