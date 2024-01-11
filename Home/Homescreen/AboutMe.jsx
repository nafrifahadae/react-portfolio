export default function AboutMe(){
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/prof-pic2.png" height={720} width={400} alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills--section--heading">About Me</h1><br/>
                    <p className="hero--section-description">Welcome to my page!</p><br/>
                    <p className="hero--section-description">I come from a background of engineering, taking likeness to Maths & Physics during my secondary school years.</p><br />
                    <p className="hero--section-description">The similarities in engineering and development such as group collaboration and even solo project work has interested me.</p><br />
                    <p className="hero--section-description">I have a desire to build on my skills as I am inquisitive by nature. This in turn has made me a fast learner and I refuse to be left behind in this ever changing tech space.</p><br />
                    <p className="hero--section-description">Find below some starter projects of mine, I’ll make sure to keep this page updated as I continue to upskill myself.</p>
                </div>
            </div>
        </section>
    )
}