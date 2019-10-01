import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://api.giphy.com/v1/gifs/random?api_key=vHmsIjK4MU2T5bgsfPI7LPSF43UGF7sl&tag=&rating=R');

        const items = await data.json();
        console.log(items.data.image_url);
        setItems(items.data);
    };


    return (
        <div>
            <h1>
                <img src= {items.image_url} alt=""/>Just a random Gif</h1>
        </div>
    );
}
export default Shop;
