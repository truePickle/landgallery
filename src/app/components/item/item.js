import styles from "./item.module.css"
import Image from "next/image";
import Link from "next/link";
const Item = ({item}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={item.image} alt={item.title} fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.author}>{item.author}</p>
                <Link href ={`${item.slug}`}>DETAILS</Link>
            </div>
        </div>
    )
}
export default Item