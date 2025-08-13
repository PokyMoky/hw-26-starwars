import info from "../config/sw-config.json";
import Hero from "./Hero.tsx";
import Gallery from "./Gallery.tsx";
import FarGalaxyFunc from "./FarGalaxyFunc.tsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/sw-context.ts";


const Home = () => {
    const {setMainHero} = useContext(SWContext);
    const {heroId} = useParams();

    useEffect(() => {
        setMainHero(heroId ?? "luke");
    }, [heroId]);

    return (
        <main>
            <Hero />
            <Gallery friends={info.friends} />
            <FarGalaxyFunc />
        </main>
    );
};

export default Home;