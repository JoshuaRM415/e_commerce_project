import {useState} from "react";
import AllPlantsViewer from "./AllPlantsViewer";
import Link from 'next/link';

export default function HomePage (props) {
    const [likes,setLikes] = useState(0);

    function Header({title}) {
        return <h1>{title ? title : 'Default title'}</h1>
    }

    const handleLikeClick = () => {
        setLikes(likes + 1);
    }

    const handleViewClick = () => {
        console.log(props.state);
        props.setter(<AllPlantsViewer />);
    }

    return (
        <div>
            <Header title='The Plant Shop'/>
            <button onClick={handleViewClick}>View Plants</button>
            <button onClick={handleLikeClick} > {likes} Likes</button>

            <Link href='./AllPlantsViewer'>All Plants</Link>;
        </div>
    )
}