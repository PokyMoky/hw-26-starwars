import Home from "./Home.tsx";
import type {FC} from "react";
import {navItems} from "../utils/constants.ts";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import AboutMe from "./AboutMe.tsx";

type Props = {
    page: string;
}

const Main:FC<Props> = ({page}) => {
    switch (page) {
        case navItems[0]:
            return <Home />;
        case navItems[1]:
            return <AboutMe />
        case navItems[2]:
            return <StarWars />
        case navItems[3]:
            return <Contact />
        default: return <Home />;
    }
};

export default Main;