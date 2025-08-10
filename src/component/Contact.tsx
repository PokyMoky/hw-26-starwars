import {useEffect, useState} from "react";
import type {Planet} from "../utils/sw-types";

const Contact = () => {
    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://sw-info-api.herokuapp.com/v1/planets");
                if (!response.ok) {
                    throw "Bad Request";
                }
                const fetchedPlanets = await response.json();
                setPlanets(fetchedPlanets.planets);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    let content = <p>Loading...</p>
    if (planets.length > 0) {
        const options = planets.map((planet) => (
            <option key={planet.name} value={planet.name}>{planet.name}</option>
        ))
        content = (
            <div className="container">
                <form className={"contact-form"}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">
                        {options}
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Contact;