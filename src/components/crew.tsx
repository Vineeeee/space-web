import { DivContent, SpanNumber } from "./destination"
import { People } from "./people/people"

export const Crew = ()=>{

    return(
        <DivContent>
            <h3 style={{display: "inline"}}><SpanNumber>02</SpanNumber> MEET YOUR CREW</h3>
            <People/>
        </DivContent>
    )
}