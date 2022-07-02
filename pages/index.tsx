import Project from "../components/project";
import projects from "../data/projects"
import ReactTypingEffect from "react-typing-effect";
import React, { useState } from "react";

export default function Index() {

    const [search, setSearch] = useState("");
    const [tab, setTab] = useState("about");

    const[open, setOpen] = useState(false);

const projects = [
    {
        title: "TSL Covid Tracker", 
        description: "bleep blorp I am a covid tracker",
    },
    { 
        title: "Glorm",
        description: "florm", }
]

const filteredProjects = projects.filter(d => d.title.includes(search));



const myName = "Jasper"

const wheehoo = {
    title: "Your mom",
    description: "Your mom's description",
    image: "ERT insta template 1.png"
}


    return (
        <>

            <div id="background">
            <div id="center-all">
            <div id="container">

            
            <Project 
            title="Your mrom"
            description="hee hee!"/>


                <div id="top-section">          <a href="https://tsl.news">  <img src="/studying-penguin-poo-t.jpg" id="template"/> </a>
                <h2> <ReactTypingEffect text={["What's good bro? Bro?!?"]}/> </h2>
                <h5><a href="results">Go to the results page</a></h5>
                </div>
         
        

            <button className = {(tab === "about") ? "tab selected" : "tab"} onClick={() => setTab("about")}>About</button>
            <button className = {(tab === "journalism") ? "tab selected" : "tab"} onClick={() => setTab("journalism")}>Journalism</button>
            <button className = {(tab === "coding") ? "tab selected" : "tab"} onClick={() => setTab("software")}>Software</button>
           {(tab === "about") ? (
            <p>Some personal shit</p>
           ) : (tab === "journalism") ? ( <p>Some journo shit</p> ) : (
            <p>Some coder shit</p>
           ) 
        }

            <div id="body">
            <h1>{myName} is saying hello</h1>
            <p>To sit in solemn silence on a dull, dark dock.</p>
            <p className="thin">Whats good</p></div> </div>

            <div className="project-box">
                <p>You can take corn out of <b>Illinois</b></p>
                <div id="flexright"> <p className="think"> But you can never take <i>Illinois</i> out of corn</p></div>
                <div id="flexright"><p><u><b>Fun fact</b> </u><br></br>Corn is made of husks and kernels</p></div>

            

            </div>

            <p>Here are some objects: {wheehoo.description}! {wheehoo.title}!</p>


            <p>Here are some props:</p>

            <Project 
                title="Your mrom" 
                description="Gleeb glorp"
            />

{projects.map(d  => (
            <Project                   
                    title={d.title}
                    description={d.description} />
                
                ))}

    <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>

            </div>
            </div>
        </>
    );
}