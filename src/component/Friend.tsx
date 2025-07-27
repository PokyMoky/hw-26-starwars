import type {FC} from "react";
import type {HeroInfo} from "../utils/sw-types";

type Props = {
    friend: HeroInfo;
    arrIndex: number;
    onClick: (index: number) => void;
    isActive: boolean;
}

const Friend: FC<Props> = ({friend, arrIndex, onClick, isActive}) => {
    return <img src={friend.img} alt={friend.name} onClick={() => onClick(arrIndex)} className={isActive ? "active" : ''}/>;
};

export default Friend;