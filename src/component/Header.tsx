import Navigation from "./Navigation.tsx";
import {useMainHero} from "../utils/hooks.ts";


const Header = () => {
    const mainHero = useMainHero();

    return (
        <header>
            <Navigation />
            <h1>{mainHero!.name}</h1>
        </header>
    );
};

export default Header;