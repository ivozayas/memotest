export default function BtnContainer({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="flex justify-center items-center cardsinnerbg hover:brightness-125 duration-150 hover:shadow-[0px_1px_1px_1px_rgba(0,0,0,0.3)] shadow-[0px_1px_5px_4px_rgba(0,0,0,0.3)] rounded h-fit w-fit text-lg text-indigo-900 hover:animate-none animate-pulse">
            {children}
        </div>
    )
}