export default function TimerText({ time, number }: { time: string, number?: number }){
    return (
        <p className='text-2xl text-yellow-400'>
            { number && <span>{number} - </span>}
            { time }
        </p>
    )
}