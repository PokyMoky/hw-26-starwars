import type {HeroInfo} from "../utils/sw-types";
import {Component, type JSX} from "react";
import Friend from "./Friend.tsx";

type Props = {
    friends: HeroInfo[]
}

type State = {
    index: number;
    gallery: boolean;
}

class Gallery extends Component<Props, State> {
    private readonly allFriendsGallery: JSX.Element[];

    constructor(props: Props) {
        super(props);
        this.state = {
            index: -1,
            gallery: true
        };

        this.allFriendsGallery = this.props.friends.map((friend: HeroInfo, index) =>
            <Friend key={friend.name} friend={friend} onClick={() => this.handleClick(index)} className=""/>);
    }

    handleClick = (index: number) => {
        const newGallery = !this.state.gallery;
        this.setState({index, gallery: newGallery});
    }

    render() {
        const singlePortrait = <Friend
            friend={this.props.friends[this.state.index]}
            onClick={() => this.handleClick(-1)}
            className="active"
        />;
        return (
            <section className="right">
                <h3>Dream Team</h3>
                <div className="gallery">
                    {this.state.gallery ? this.allFriendsGallery : singlePortrait};
                </div>
            </section>
        );
    }
}

export default Gallery;