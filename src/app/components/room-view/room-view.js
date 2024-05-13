"use client"

import Image from "next/image";
import styles from "./room-view.module.css"
import {useEffect, useRef, useState} from "react";
const RoomViewParameters = [
    {image: "/interior/room1.jpg", coordinate: {x: 275, y: 50}, size: "50%"},
    {image: "/interior/room2.jpg",coordinate: {x: 300, y: 120}, size: "38%"},
    {image: "/interior/room3.jpg",coordinate: {x: 300, y: 30}, size: "47%"},
    {image: "/interior/room4.jpg",coordinate: {x: 230, y: 20}, size: "45%"}
];
const RoomView = ({background, artwork}) => {
    const [artworkPosition, setArtworkPosition] = useState({ x: 0, y: 0 });
    const [artworkSize, setArtworkSize] = useState({ width: '50%', height: '50%' });
    const backgroundRef = useRef(null);
    const findRoomParameters = (imageName) => {
        return RoomViewParameters.find(room => room.image === imageName);
    }

    // Get room parameters based on the provided background image
    const roomParams = findRoomParameters(background);
    useEffect(() => {

        if (roomParams) {

            const newWidth = roomParams.size;
            const newHeight = roomParams.size;
            setArtworkSize({ width: newWidth, height: newHeight });

            // Рассчитываем новое положение artwork
            const newX = roomParams.coordinate.x
            const newY = roomParams.coordinate.y
            setArtworkPosition({ x: newX, y: newY });
        }
    }, [background]);

    return (
         <>{background ? (
                 <svg viewBox="0 0 1056 639">
                     <filter id="shadow">
                         <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#444444"></feDropShadow>
                     </filter>
                     <image
                         href={background}
                         height="100%"
                         width="100%"
                         x="0"
                         ref={backgroundRef}
                     ></image>
                     <image
                         href={artwork}
                         height={artworkSize.height}
                         width={artworkSize.width}
                         x={artworkPosition.x}
                         y={artworkPosition.y}
                         filter=""
                     ></image>
                 </svg>
             ) :
             (<div className={styles.artworkFull} style={{backgroundImage: `url(${artwork})`}}></div>)

         }</>
    );
};

export default RoomView; /*<div className={styles.thumbnail} >
            {background ? (
                <>
                    <div className={styles.background} style={{backgroundImage: `url(${background})`}}></div>
                    <div className={styles.artwork} style={{backgroundImage: `url(${artwork})`}}></div>
                </>
            ) : (
                <div className={styles.artworkFull} style={{backgroundImage: `url(${artwork})`}}></div>
            )}
        </div>*/
/*
        <>{background ? (
                <svg viewBox="0 0 1056 639">
                    <filter id="shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#444444"></feDropShadow>
                    </filter>
                    <image
                        href={background}
                        height="100%"
                        width="100%"
                        x="0"
                        ref={backgroundRef}
                    ></image>
                    <image
                        href={artwork}
                        height={artworkSize.height}
                        width={artworkSize.width}
                        x={artworkPosition.x}
                        y={artworkPosition.y}
                        filter=""
                    ></image>
                </svg>
            ) :
            (<div className={styles.artworkFull} style={{backgroundImage: `url(${artwork})`}}></div>)

        }</>*/
// <div className={styles.roomView}>
//     {background ? (
//         <>
//             <div className={styles.background}>
//                 <Image src={background} alt={background}
//                        fill className={styles.img}
//                 />
//             </div>
//             <div className={styles.artwork} >
//                 <Image src={artwork} alt={artwork} fill className={styles.img}
//                       ></Image>
//             </div>
//         </>
//     ):(
//         <div className={styles.artworkFull}>
//             <Image src={artwork} alt={artwork} fill className={styles.img}
//                    ></Image>
//         </div>
//     )}
// </div>