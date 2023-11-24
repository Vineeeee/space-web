import { DivContent, SpanNumber } from "./destination"
import { People } from "./people/people"

export const Crew = () => {

    return (<>
        <DivContent>
            <h3><SpanNumber>02</SpanNumber> MEET YOUR CREW</h3>
        </DivContent>
        <People />
    </>
    )
}