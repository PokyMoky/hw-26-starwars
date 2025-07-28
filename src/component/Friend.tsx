import type {FC} from "react";
import type {HeroInfo} from "../utils/sw-types";

type Props = {
    friend: HeroInfo;
    onClick: () => void;
    className: string;
}

const Friend: FC<Props> = ({friend, ...props}) => {
    return <img src={friend.img} alt={friend.name} {...props} />;
};

export default Friend;