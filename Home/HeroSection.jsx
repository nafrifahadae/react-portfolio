export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Nathaniel Afrifah-Adae</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Software</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <br />
                    <p className="hero--section--description">
                        A collection of small projects as I build on my skills daily!
                        <br/> Contact details down below.
                    </p>
                    <br />
                </div>
                <a href="https://www.linkedin.com/in/nathaniel-afrifah-adae/" target="_blank">
                <button className="btn btn-primary"> LinkedIn 📬</button>
                </a>
            </div>
            <div className="hero-section--img">
                <img src="./img/prof-pic-nb.png" height={640} width={480} alt="Hero Image"/>
            </div>
        </section>
    )
}
