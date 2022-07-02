import rdata from "../data/rdata";

export default function DataVis(props: {
    cand: string,
    pct: number,
    party: string,
    won: boolean}
) {
    
    return (
        
        <div id="r-body">
        <p><div id="candname" style={{fontWeight: props.won ? "800": "300"}}>{props.cand}</div></p>
        <div className="progbar"> 
            <div className="progbar-result" style={{width: props.pct+"%", backgroundColor: (props.party === "dem")? "rgb(15, 26, 147)": "rgb(96, 10, 10)"}}>
                <div className="center-text">{props.pct+"%"}</div></div></div>
                </div>


    )
}