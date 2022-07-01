import Head from "next/head"

export default function Index() {
    return (
        <>
     
            <head>
                <title>Jasper's week 1 website</title>
            <meta name="description" content="Welcome to the SITE!"/>
            </head>

            

            <div id="background">
            <div id="center-all">
            <div id="container">

            <span>Jasper :)))) </span>

                <div id="top-section">          <a href="https://tsl.news">  <img src="/studying-penguin-poo-t.jpg" id="template"/> </a>
                <h2> What's good bro? Bro?!? </h2>
                </div>
            <div id="body">
            <h1>Jasper is saying hello</h1>
            <p>To sit in solemn silence on a dull, dark dock.</p>
            <p className="thin">Whats good</p>
            <p class="bolder">Whats good</p></div>
            </div>
            <div className="project-box">
                <p>You can take corn out of <b>Illinois</b></p>
                <div id="flexright"> <p class ="think"> But you can never take <i>Illinois</i> out of corn</p></div>
                <div id="flexright"><p><u><b>Fun fact</b> </u><br></br>Corn is made of husks and kernels</p></div>
            </div>
            </div>
            </div>
        </>
    );
}