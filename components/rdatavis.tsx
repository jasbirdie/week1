import rdata from "../data/rdata";

export default function DataVis(props: {
    cand: string,
    pct: string,
    party: string,}
) {
    
    return (
        
        <div id="r-body">
        <p><b>{props.cand}</b></p>
        <div className="progbar"> 
            <div className="progbar-result" style={{width: props.pct+"%", backgroundColor: (props.party === "dem")? "rgb(15, 26, 147)": "rgb(96, 10, 10)"}}>
                <div className="center-text">{props.pct+"%"}</div></div></div>
                </div>


    )
}