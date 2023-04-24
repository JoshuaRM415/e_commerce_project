import {useState} from 'react';
import PlantProfile from './PlantProfile.js'
import PlantTile from './PlantTile.js';
import Link from 'next/link';

export default function AllPlantsViewer (props) {

    //Some kind of object or array of objects containing all the
    //plant data will be here for us to unpack.
    const responseObj = [
        {key:1,name:'cacti 1',path:'/images/plant1.jpg',description:'descrip 1',price:'10000',alt:'yellow plant'},
        {key:2,name:'cacti 2',path:'/images/plant2.jpg',description:'descrip 2',price:'10000',alt:'yellow plant'},
        {key:3,name:'cacti 3',path:'/images/plant3.jpg',description:'descrip 3',price:'10000',alt:'yellow plant'},
        {key:4,name:'cacti 4',path:'/images/plant4.jpg',description:'descrip 4',price:'10000',alt:'yellow plant'},
        {key:5,name:'cacti 5',path:'/images/plant5.jpg',description:'descrip 5',price:'10000',alt:'yellow plant'},
        {key:6,name:'cacti 6',path:'/images/plant6.jpg',description:'descrip 6',price:'10000',alt:'yellow plant'}
    ];

    const numberOfPlantsPerRow = 4;

    //number of products to show. Maybe default to 5.
    const [productsShown,setProductsShown] = useState(5);

    const handleProductQuantityView = (e) => {
        setProductsShown(e.target.value)
    }

    const trimResults = () => {
        return responseObj.slice(0,productsShown);
    }

    const fillProductTiles = () => {
        const trimmedPlantList = trimResults();
        //Split list into multiple lists to get displayed as rows?
        const formattedList = []
        let rowList = []
        let column = 1;
        let i = 1;

        //make a nested list of rows.
        //need to write code to handle when we only want to see one plant.
        for (const plant of trimmedPlantList) {
            rowList.push(plant);
            if (column === numberOfPlantsPerRow || i === trimmedPlantList.length) {
                console.log('end of row');
                formattedList.push(rowList);
                rowList = []
                column = 0;
            } else {
                column++;
            }
            i++
        }
        // return formattedList;
        console.log(formattedList)
        return trimmedPlantList.map((plant,index) => <PlantTile name={plant.name} path={plant.path} price={plant.price} key={plant.key} alt={plant.alt}/>)
        
    }
    
    return (
        //How to list a dynamic number of product tiles based on some selection. Or a fixed number to get started.
        //Currently iterates through whole list.

        <div> 
            <h1>hellooooooooo</h1>
            <input type='number' step='1' min='3' max={responseObj.length} onChange={handleProductQuantityView}/>
            {/* {responseObj.map((plant,index) => <PlantTile name={plant.name} path={plant.path} price={plant.price} key={plant.key} alt={plant.alt}/>)} */}
            {fillProductTiles()}
        </div>
    )
} 