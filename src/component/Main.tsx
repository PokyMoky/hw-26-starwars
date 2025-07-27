import info from "../config/sw-config.json";
import Hero from "./Hero.tsx";
import Gallery from "./Gallery.tsx";
import FarGalaxy from "./FarGalaxy.tsx";


const Main = () => {
    return (
        <main>
            <Hero />
            <Gallery friends={info.friends} />
            <FarGalaxy />
        </main>
    );
};

export default Main;