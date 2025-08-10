import type {HeroInfo} from "../utils/sw-types";
import {type FC, useState} from "react";
import Friend from "./Friend.tsx";

type Props = {
    friends: HeroInfo[]
}

const Gallery:FC<Props> = ({friends}) => {
    const [picIndex, setPicIndex] = useState(-1);
    const [isGallery, setIsGallery] = useState(true);

    function handleClick(index: number) {
        setPicIndex(index);
        setIsGallery(prev => !prev);
    }

    const allFriendsGallery = friends.map((friend: HeroInfo, index) =>
        <Friend key={friend.name} friend={friend} onClick={() => handleClick(index)} className=""/>);

    const singlePortrait = <Friend
        friend={friends[picIndex]}
        onClick={() => handleClick(-1)}
        className="active"
    />;

    return (
        <section className="right">
            <h3>Dream Team</h3>
            <div className="gallery">
                {isGallery ? allFriendsGallery : singlePortrait};
            </div>
        </section>
    );
};

export default Gallery;