"use client"

import {getItemsFromUser} from "@/lib/data";
import {useEffect, useState} from "react";
import Item from "@/app/components/item/item";



const SliderArtist =  ({data}) => {

    /*const [data, setData] = useState(null);
    console.log("ArtistID SliderArtis " +id)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getItemsFromUser(id);
            setData(data);
        };

        fetchData().then();
    }, [id]);
    console.log(data)*/
    return (<div>

        {data.map ( (item, index) => (
            <div key={index}>{item}</div>
            ))}
    </div>)
}

export default SliderArtist