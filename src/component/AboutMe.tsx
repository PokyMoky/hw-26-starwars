import {useEffect, useState} from "react";

const AboutMe = () => {
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
            const id = Math.trunc(Math.random() * 70 + 1);
            try {
                const firstResponse = await fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`);
                if (!firstResponse.ok) {
                    throw "Bad Request";
                }
                const firstResponseData = await firstResponse.json();
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
                    <p>Birth year: {info.birth_year}</p>
                    <p>Homeworld: {info.homeworld}</p>
                </div>
            )}
        </>
    );
};

export default AboutMe;
