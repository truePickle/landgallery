import styles from "./gallery-page.module.css"
import {getGallery} from "@/lib/data";
const GalleryPage = async ({params}) => {
    const {slug} = params
    console.log(slug)
    const gallery = await getGallery(slug)
    console.log(gallery.city)
    return(
        <section className={styles.gallery}>
            <div className={styles.galleryInfo}>
                <h1>Willkommen in unserer Galerie! In {gallery.city}</h1>
                <p>
                    Entdecken Sie die faszinierende Welt der Kunst in unserer Galerie. Wir präsentieren eine
                    vielfältige Sammlung von Gemälden, Skulpturen und mehr, um Ihre Sinne zu inspirieren und zu
                    erfreuen.
                </p>
                <p>
                    Unsere Galerie bietet eine einladende Atmosphäre, in der Sie die Werke renommierter Künstler
                    bewundern und neue Talente entdecken können. Besuchen Sie uns und lassen Sie sich von der Schönheit
                    und Vielfalt der Kunst verzaubern.
                </p>
            </div>
            <div className={styles.galleryDetails}>
                <h2>Öffnungszeiten:</h2>
                <p>{gallery.openDays} {gallery.openTime}</p>
                <p>Samstag: Geschlossen</p>
                <p>Sonntag: Geschlossen</p>
                <h2>Adresse:</h2>
                <p>{gallery.address}</p>
                <h2>Kontakt:</h2>
                <p>Telefon: +49 123 456789</p>
                <p>E-Mail: info@gallery.com</p>
            </div>
        </section>
    )
}

export default GalleryPage