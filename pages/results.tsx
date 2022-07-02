import rdata, {demgov, gopgov} from "../data/rdata";
import Project from "../components/rdatavis";
import DataVis from "../components/rdatavis";

export default function Index() {
    return (
        <>
            <div id="r-contained">
                <a href="https://evanstonroundtable.com"> <img src="/roundtable_logo_blackonly.png" id="r-header-img"></img></a>
                <div id="r-text">
                <h3>Primary election results</h3>
                <h4><i>June 28, 2022</i></h4>
                </div>

                <div id="newflex-r">
                <div id="flexleft-r">
                <h5>Governor: Democratic</h5>
                {demgov.map(d  => (
            
            <DataVis                   
                    cand={d.cand}
                    pct={d.pct}
                    party={d.party}
                    won={d.won} />
                ))}
             
                </div>

                <div id="flexright-r">
                <h5>Governor: Republican</h5>
                {gopgov.map(d  => (
            
            <DataVis                   
                    cand={d.cand}
                    pct={d.pct}
                    party={d.party}
                    won={d.won} />
                ))}
             
                </div>
                </div>
            
            </div>
            
       </>
    );
}
