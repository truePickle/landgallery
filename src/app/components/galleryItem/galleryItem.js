"use client"

import {useState} from "react";
import Link from "next/link";
import styles from "./galleryItem.module.css"

const GalleryItem = ({ city,name, address,openTime, openDays, slug }) => {
    const [expanded, setExpanded] = useState(false);
    console.log(name)
    console.log(city)
    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div  style={{ cursor: 'pointer' }} onClick={toggleExpansion}>
                <h3>{city}
                </h3>
            </div>
            {expanded && (
                <div>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{openDays} {openTime}</p>
                    <Link href={`/gallery/${slug}`}
                          style={{}}>zur Galerie</Link>
                </div>
            )}
        </div>
    );
};

export default GalleryItem;