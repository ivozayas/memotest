'use client';

import { useState, useEffect } from 'react';

export default function Win() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000);

        return () => clearTimeout(timer)
    }, [])

    // if (!isVisible) return null
    
    return (
        <div
            className={`fixed inset-x-0 inset-y-80 z-50 flex justify-center items-center cardsbg transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <p className="text-yellow-400 text-[5rem] font-bold">¡GANASTE, TE AMO!</p>
        </div>
      )
}