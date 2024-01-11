import HeroSection from "../HeroSection";
import AboutMe from "./AboutMe";
import MyPortfolio from "../MyPortfolio";
import MyCV from "../MyCV";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <MyPortfolio/>
            <MyCV/>
            <ContactMe/>
            <Footer/>
        </>
    );
}