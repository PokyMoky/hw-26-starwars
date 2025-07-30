import {Component} from "react";

class StarWars extends Component {

    render() {

        return (
            <div className="star-wars-container">
                <div className="intro-text">A long time ago in a galaxy far, far away...</div>
                <div className="logo">STAR WARS</div>
                <div className="crawl">
                    <div className="crawl-text">
                        <p>The galaxy is in turmoil as the evil Galactic Empire tightens its grip across the stars. A
                            small band of rebels, fighting for freedom, dares to challenge the Emperor’s reign. Among
                            them is a young farm boy named Luke Skywalker, who dreams of something greater than his
                            desert home on Tatooine.

                            When he discovers a hidden message from Princess Leia, captured by the sinister Darth Vader,
                            Luke is thrust into an epic journey. Guided by the wise Jedi Master Obi-Wan Kenobi, he
                            begins to learn the ways of the Force. Alongside smugglers Han Solo and Chewbacca, Luke
                            joins the Rebel Alliance to destroy the Empire’s ultimate weapon — the Death Star.

                            As the battle rages on, Luke faces the truth about his past and the darkness within his own
                            bloodline. In a final confrontation, he seeks to redeem his father — Anakin Skywalker, now
                            known as Darth Vader — and bring balance to the Force. Against all odds, the rebels triumph,
                            and the shadow of the Empire begins to fade.

                            Hope is restored, and the galaxy breathes again.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StarWars;