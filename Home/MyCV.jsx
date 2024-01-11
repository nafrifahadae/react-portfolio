export default function MyCV() {
    return (
        <section id="MyCV" className="my--cv">
            <div>
                <p className="sub--title">My CV</p>
                <h1 className="section--heading">View or download!</h1>
            </div>
            <div className="cv-image">
                <img src="./img/cv-laptop.png" height={370} width={600} alt="cv-preview"/>
            </div>
            <br />
            <div className="cv-link">
                <a href="./documents/CV NATHANIEL AFRIFAH-ADAE JAN 2024.pdf" target="_blank">View as PDF (approx 138kb)</a>
            </div>
        </section>
    )
}

