"use client"
import {GoogleMap, useJsApiLoader, MarkerF, InfoWindowF} from '@react-google-maps/api';
import {Suspense, useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {getGalleries} from "@/lib/data";


const galleries = [{
    name: "Galerie Mensing",
    position: {lat: 48.77691771902695, lng: 9.176720346151352},
    slug: "/gallery/galerie-mensing",
    openTime: "11:00-19:00",
    openDays:"Mo-Fr",
    address:"Königstraße 21, 70173 Stuttgart",
}, {
    name: "Galerie Kunstgenuss",
    position: {lat: 52.28109216203283, lng: 8.053162189530141},
    openTime: "11:00-19:00",
    openDays:"Mo-Fr",
    address:"Liebigstraße 29, 49074 Osnabrück",
    slug: "/gallery/galerie-kunstgenuss"
},


]
const MapComponent = () => {


    const containerStyle = {
        width: '100%', height: '400px'
    };

    const center = {
        lat: 50.98302217730332 , lng: 10.34808888915953
    };
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey: "AIzaSyBpoymvEhI2utEmFdAPujgfHW104HcuR5I"
    })
    const options = {
        mapId: "91bf7877475265d3", mapTypeControl: false, fullscreenControl: false,


    }
    const [selectedGallery, setSelectedGallery] = useState(null);

    const handleMarkerClick = useCallback((gallery) => {
        setSelectedGallery(gallery);
        console.log("Clicked")
    }, []);

    const handleCloseInfoWindow = useCallback(() => {
        setSelectedGallery(null);
    }, []);


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
            options={options}
        >
            {galleries.map((gallery) => (
                <MarkerF
                    key={`${gallery.name}-${gallery.position.lat}`}
                    position={gallery.position}
                    onClick={() => {
                        setSelectedGallery(prevGallery =>
                            prevGallery === gallery ? undefined : gallery
                        );
                    }}
                />
            ))}
            {selectedGallery && selectedGallery.position && (
                <InfoWindowF
                    position={selectedGallery.position}
                    onCloseClick={handleCloseInfoWindow}
                    anchor={selectedGallery.position}
                >
                    <div>
                        <h3><Link href={`${selectedGallery.slug}`}>{selectedGallery.name}</Link></h3>
                        <p>{selectedGallery.address}</p>
                        <p>{selectedGallery.openDays} {selectedGallery.openTime}</p>
                    </div>
                </InfoWindowF>
            )}
        </GoogleMap>
    ) : (
        <div>Loading...</div>
    );
}

export default MapComponent


/* const [galleries, setGalleries] = useState(null)
    useEffect(() => {
        // Асинхронный вызов функции fetchData
        getGalleries()
            .then((result) => {
                // Обновляем состояние компонента с полученными данными
                setGalleries(result);
            })
            .catch((error) => {
                // Обработка ошибки
                console.error("Error fetching data:", error);
            });
    }, []);
*/