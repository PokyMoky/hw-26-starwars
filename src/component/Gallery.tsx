import type {HeroInfo} from "../utils/sw-types";
import {type FC, useContext} from "react";
import Friend from "./Friend.tsx";
import {useNavigate} from "react-router-dom";
// import friend from "./Friend.tsx";
import {SWContext} from "../utils/sw-context.ts";


type Props = {
    friends: HeroInfo[]
}

const Gallery: FC<Props> = ({friends}) => {
    const navigate = useNavigate();
    const {mainHero} = useContext(SWContext);

    const btnClick = (friend: HeroInfo) => {
        navigate(`/home/${friend.id}`);
    }

    const allFriendsGallery = friends
        .filter(friend => friend.id !== mainHero)
        .map((friend: HeroInfo) =>
            <Friend key={friend.name} friend={friend} onClick={() => btnClick(friend)} className=""/>);



    return (
        <section className="right">
            <h3>Dream Team</h3>
            <div className="gallery">
                {allFriendsGallery};
            </div>
        </section>
    );
};

export default Gallery;