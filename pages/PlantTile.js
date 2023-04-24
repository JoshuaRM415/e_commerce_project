import {useState} from 'react';
import Image from 'next/image';

export default function PlantTile ({key,path,name,price,alt}) {
    console.log();
    return (
        <div>
            <Image id={key} src={path} width='200' height='355' alt={alt}/>
            <br/>
            <label for={key}>
                {name}
                <br/>
                {price}
            </label>
            <p></p>
        </div>
    )
}