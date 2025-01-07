'use client'

import { useState } from "react"
import BtnContainer from "../BtnContainer";
import HomeHeader from "./HomeHeader";
import LinkBtn from "./LinkBtn";

export default function HomeContainer(){
    const [ show, setShow ] = useState<boolean>(false)


    return (
        <div className="flex flex-col justify-center items-center h-[80vh] space-y-6">
            <HomeHeader show={show} setShow={setShow}/>

            { show && 
                <LinkBtn
                    url="/memotest"
                >
                    <BtnContainer>
                        <p className="text-[2rem] mx-4 my-3">JUGAR</p>
                    </BtnContainer>
                </LinkBtn>
            }
        </div>
    )
}