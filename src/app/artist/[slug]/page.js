import {getItemsFromUser, getUser} from "@/lib/data";
import styles from "./artist.module.css";
import Item from "@/app/components/item/item";

const Artist = async ({params}) => {
    const {slug} = params
    const artist = await getUser(slug)
    const items = await getItemsFromUser(artist.id)
    console.log(items)
    return (
        <div className={styles.container}>
            <div className={styles.artistInfo}>
                <h2>{artist.username}</h2>
                <p>{artist.aboutMe}</p>
            </div>
            <div className={styles.containerItem}>
                {items.map(item => (
                    <div className={styles.item} key ={item.id}>
                        <Item item = {item}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Artist;