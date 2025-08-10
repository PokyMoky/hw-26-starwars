import {useEffect, useState} from "react";

const FarGalaxyFunc = () => {
    const initialInfo = {
        title: "",
        release_date: "",
        episode_id: 0,
        opening_crawl: "Loading..."
    }
    const [info, setInfo] = useState(initialInfo);

    useEffect(() => {
        const ep = Math.trunc(Math.random() * 4 + 1);
        (async () => {
            try {
                const response = await fetch("https://sw-info-api.herokuapp.com/v1/films" + "/" + ep);
                if (!response.ok) {
                    throw "Bad request";
                }
                const data = await response.json();
                localStorage.setItem("farGalaxy", JSON.stringify(data));
                setInfo({
                    title: data.title,
                    release_date: data.release_date,
                    episode_id: data.episode_id,
                    opening_crawl: data.opening_crawl
                });
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    useEffect(() => {
        return () => {
            localStorage.removeItem("farGalaxy");
        }
    }, []);

    return (
        <p className="farGalaxy">
            Title: <span>{info.title}</span><br/>
            Episode: <span>{info.episode_id}</span><br/>
            Release_date: <span>{info.release_date}</span><br/>
            <span>{info.opening_crawl}</span>
        </p>
    );
};

export default FarGalaxyFunc;