// import {useContext} from "react";
// import {SWContext} from "../utils/sw-context.ts";
// import {friends} from "../config/sw-config.json";
import {useMainHero} from "../utils/hooks.ts";

const Hero = () => {
    // const {mainHero} = useContext(SWContext);
    // const mainHeroInfo = friends.find(item => item.id === mainHero);

    const mainHeroInfo = useMainHero();
    return (
        <section className="left">
            {/*<img src="/src/images/main.jpg" alt="Luke"/>*/}
            <img src={mainHeroInfo!.img} alt="hero" />
        </section>
    );
};

export default Hero;