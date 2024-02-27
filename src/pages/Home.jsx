import './Home.css'

import Header from "../components/organism/Header";
import About from "../components/organism/About";
import MisVis from "../components/organism/MisVis";
import InfoCards from "../components/organism/InfoCards";
import Footer from "../components/organism/Footer";
import Ubicacion from "../components/organism/Ubication";
import MenuHeader from "../components/organism/MenuHeader";
import Historia from "../components/organism/Historia";

function Home() {
    return (
        <>                
        <MenuHeader />
            <div className="HomeContainer">
                <Header />
                <About />
                <MisVis />
                <Historia />
                <InfoCards />
                <Ubicacion />
                <Footer />
            </div>
        </>
    );
}

export default Home;