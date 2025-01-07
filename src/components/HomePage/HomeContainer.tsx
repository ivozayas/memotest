'use client'

import { useState } from "react"
import BtnContainer from "../BtnContainer";
import HomeHeader from "./HomeHeader";
import LinkBtn from "./LinkBtn";
import Image from "next/image"

export default function HomeContainer(){
    const [ show, setShow ] = useState<boolean>(false)


    return (
        <div className="flex flex-col justify-center items-center h-[80vh] space-y-6">
            <HomeHeader show={show} setShow={setShow}/>

            { show && 
                <LinkBtn
                    url="/memotest"
                    children={<BtnContainer children={<p className="text-[2rem] mx-4 my-3">JUGAR</p>}/>}
                />
            }
        </div>
    )
}