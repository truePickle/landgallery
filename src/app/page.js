import styles from "./homepage.module.css"
import Item from "@/app/components/item/item";
import {getItem, getItems} from "@/lib/data";
// TODO: Add metadata for better search results

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/item")
    if (!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json()
}
const Homepage = async () => {

    const items = await getItems()
    console.log(items)
    return (
        <div>
            <div className={styles.siteDescription}>
                <h1>Landgalerie</h1>
                <p>Willkommen auf unserer Website für den Verkauf von Gemälden! Hier finden Sie eine breite Auswahl an
                    Kunstwerken verschiedener Stile und Richtungen.</p>
                <p>Viel Spaß beim Stöbern und wählen Sie die perfekten Gemälde für Ihr Zuhause oder Büro aus.</p>
            </div>
            <div className={styles.container}>

                {items.map(item => (
                    <div className={styles.item} key={item.id}>
                        {item && <Item item={item}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Homepage