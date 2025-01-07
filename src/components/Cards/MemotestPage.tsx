import CardsGridContainer from "../Cards/CardsGridContainer";
import PageContainer from "../PageContainer";
import TimerList from "./TimerList";

export default function MemotestPage(){
    return (
        <PageContainer>
            <TimerList/>
            <CardsGridContainer/>
        </PageContainer>
    )
}