'use client'

import { cardStore } from "@/store/card";
import CardsGrid from "./CardsGrid";
import Reset from "./ResetBtn";
import Win from "./Win";
import BtnContainer from "../BtnContainer";
import Timer from "./Timer";
import { FaRedoAlt  } from "react-icons/fa";

export default function CardsGridContainer(){
    const { won, cards} = cardStore()

    return (
        <div className="flex flex-col justify-start items-center space-y-4">
            <CardsGrid cards={cards}/>

            <div className="flex flex-row items-center justify-center space-x-6">
                <Timer/>

                {/* { !won &&
                    <Reset>
                        <BtnContainer>
                            <div className="px-3 py-1"><FaRedoAlt/></div>
                        </BtnContainer>
                    </Reset>
                } */}

                { won &&
                    <div>
                        <Reset>
                            <BtnContainer>
                                <p className="px-3 py-1">VOLVER A JUGAR</p>
                            </BtnContainer>
                        </Reset>        

                        <Win/>
                    </div>
                }
                
            </div>
         
        </div>
    )
}