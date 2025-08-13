import {useContext, useEffect, useState} from "react";
import {SWContext} from "../utils/sw-context.ts";
import {friends} from "../config/sw-config.json";

const AboutMe = () => {
    const {mainHero} = useContext(SWContext);
    const currentHero = friends.find(elem => elem.id === mainHero);

    const initialInfo = {
        isLoaded: false,
        name: '',
        gender: "",
        birth_year: undefined,
        homeworld: ""
    };
    const [info, setInfo] = useState(initialInfo);

    useEffect(() => {
        (async () => {
            try {
                const firstResponse = await fetch(`https://sw-info-api.herokuapp.com/v1/${currentHero!.path}`);
                if (!firstResponse.ok) {
                    throw "Bad Request";
                }
                const firstResponseData = await firstResponse.json();

                if (mainHero !== "falcon") {
                    const homeworldId = firstResponseData.homeworld;

                    const secondResponse = await fetch(`https://sw-info-api.herokuapp.com/v1/planets/${homeworldId}`);
                    if (!secondResponse.ok) {
                        throw "Bad Request";
                    }
                    const secondResponseData = await secondResponse.json();

                    setInfo({
                        isLoaded: true,
                        name: firstResponseData.name,
                        gender: firstResponseData.gender,
                        birth_year: firstResponseData.birth_year,
                        homeworld: secondResponseData.name
                    });
                } else {
                    setInfo({
                        isLoaded: true,
                        name: firstResponseData.name,
                        gender: "n/a",
                        birth_year: firstResponseData.created,
                        homeworld: "Corellian Engineering Corporation"
                    })
                }


            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            {!info.isLoaded ? (<p>Loading...</p>) : (
                <div className={"personal-data"}>
                    <p>Name: {info.name}</p>
                    <p>Gender: {info.gender}</p>
                    <p>{mainHero !== "falcon" ? "Birth year:": "Creation date:" } {info.birth_year}</p>
                    <p>{mainHero !== "falcon" ? "Homeworld:" : "Manufacturer:" } {info.homeworld}</p>
                </div>
            )}
        </>
    );
};

export default AboutMe;
