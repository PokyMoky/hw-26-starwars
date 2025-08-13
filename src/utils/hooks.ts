import {useContext} from "react";
import {SWContext} from "./sw-context.ts";
import {friends} from "../config/sw-config.json";

export const useMainHero = () => {
    const {mainHero} = useContext(SWContext);
    const mainHeroInfo = friends
        .find(item => item.id === mainHero);
    return mainHeroInfo;
}