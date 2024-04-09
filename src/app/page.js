import styles from "./homepage.module.css"
import Item from "@/app/components/item/item";
const Homepage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Item/>
            </div>
            <div className={styles.item}>
                <Item/>
            </div>
            <div className={styles.item}>
                <Item/>
            </div>
            <div className={styles.item}>
                <Item/>
            </div>
        </div>
    )
}
export default Homepage