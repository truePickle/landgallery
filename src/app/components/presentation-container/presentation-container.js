"use client"
import styles from "@/app/components/presentation-container/presentation.module.css";
import RoomView from "@/app/components/room-view/room-view";
import Thumbnail from "@/app/components/thumbnail/thumbnail";
import {useState} from "react";

const thumbnails = [
    {image: "/interior/room1.jpg"},
    {image: "/interior/room2.jpg"},
    {image: "/interior/room3.jpg"},
    {image: "/interior/room4.jpg"}
];
const PresentationContainer = ({image}) => {
    const [currentArtwork, setCurrentArtwork] = useState(image);
    const [currentInterior, setCurrentInterior] = useState(null);
    const handleThumbnailClick = (interior, artwork) => {

        setCurrentInterior(interior);
        setCurrentArtwork(artwork);
    };
    return (
        <div className={styles.previewContainer}>
            <div className={styles.imgContainer}>
                <RoomView background={currentInterior} artwork={currentArtwork}/>
            </div>

            <div className={styles.thumbnailContainer}>
                <Thumbnail artwork={image} onClick={handleThumbnailClick}/>
                {thumbnails.map((thumbnailImg, index) => (
                    <Thumbnail background={thumbnailImg.image} artwork={image} key={index}
                               onClick={handleThumbnailClick}></Thumbnail>))
                }
            </div>
        </div>);
}
export default PresentationContainer