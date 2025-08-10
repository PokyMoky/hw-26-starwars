import info from "../config/sw-config.json";
import Hero from "./Hero.tsx";
import Gallery from "./Gallery.tsx";
import FarGalaxyFunc from "./FarGalaxyFunc.tsx";


const Home = () => {
    return (
        <main>
            <Hero />
            <Gallery friends={info.friends} />
            <FarGalaxyFunc />
        </main>
    );
};

export default Home;