const rdata = [
    {
        cand: "J.B. Pritzker", 
        pct: 91.8,
        party: "dem",
        office: "gov",
    },
    {
        cand: "Beverly Miles", 
        pct: 8.2,
        party: "dem",
        office: "gov",
    },
    {
        cand: "Darren Bailey", 
        pct: 57.7,
        party: "gop",
        office: "gov",
    },
    {
        cand: "Jesse Sullivan", 
        pct: 15.6,
        party: "gop",
        office: "gov",
    },
    {
        cand: "Richard Irvin", 
        pct: 14.9,
        party: "gop",
        office: "gov",
    },
    {
        cand: "Gary Rabine", 
        pct: 6.6,
        party: "gop",
        office: "gov",
    },
];

export const demgov = rdata.filter(rdata => rdata.party === 'dem' && rdata.office === 'gov');

export const gopgov = rdata.filter(rdata => rdata.party === 'gop' && rdata.office === 'gov');

export default rdata