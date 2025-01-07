'use client'

import React, { useState, useEffect, useRef } from 'react';
import { cardStore } from '@/store/card';

export default function Timer(){
    const won = cardStore((state: any) => state.won)

    const [time, setTime] = useState(0)
    const intervalRef = useRef<number | NodeJS.Timeout | null>(null)
  
    useEffect(() => {
        if (!won) {
            setTime(0)
            intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
            }, 10)
        }

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [won])

    const formatTime = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        const centiseconds = Math.floor((milliseconds % 1000) / 10)

        const pad = (num: number) => String(num).padStart(2, '0')
        return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`
    }

    return (
        <p className='text-2xl text-yellow-400'>{formatTime(time)}</p>
    )
}
    