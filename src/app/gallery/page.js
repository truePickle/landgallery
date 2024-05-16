import MapComponent from "@/app/components/map/map";
import {getGalleries} from "@/lib/data";
import Link from "next/link";
import GalleryItem from "@/app/components/galleryItem/galleryItem";
import styles from "./gallery.module.css"
import Image from "next/image";

const Galleries = async () => {

    const galleries = await getGalleries()
    return (<section className={styles.content}>
        <div className={styles.imageContainer}>
            {/*<Image src="/img.png" alt={"Galerie Foto"} fill className={styles.img}></Image>*/}
        </div>
        <div className={styles.header}>
            <div className="col-lg-12 text-center">
                <h1>BESUCHE DEINE GALERIE VOR ORT</h1>
            </div>
            <div className="col-md-8 col-md-offset-2">
                <p className="lead text-center">
                    An 2 Standorten in Deutschland haben wir es uns zum Ziel gesetzt, dir die Vielfalt unseres ständig
                    wachsenden Portfolios nahe zu bringen. Wir freuen uns auf deinen Besuch und beraten dich gern!
                </p>
            </div>
        </div>
        <MapComponent/>

        <div className={styles.standorte}>
            <hr className="mb-1"></hr>
            <h3 className="lead mb-1">Unsere Standorte in Deutschland</h3>
            <hr className="mb-1"></hr>
            {galleries ? (galleries.map((gallery, index) => (
                    (<div key={index}>
                        <GalleryItem city={gallery.city}
                                     name={gallery.name}
                                     address={gallery.address}
                                     openTime={gallery.openTime}
                                     openDays={gallery.openDays}
                                     slug={gallery.slug}
                        />
                        <hr className="mb-3"></hr>
                    </div>)
                ))) :
                <div>Loading...</div>}


        </div>
    </section>)
}

export default Galleries