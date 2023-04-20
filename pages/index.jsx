import {useState} from 'react';

function Header({title}) {
    return <div>{title ? title : 'Default title'}</div>
}

export default function HomePage () {
    const [likes,setLikes] = useState(0);


    const handleClick = () => {
        setLikes(likes + 1);
    }
    return (
        <div>
            <Header title='The Plant Shop'/>
            <button onClick={handleClick} > {likes} Likes</button>
        </div>
    )
}