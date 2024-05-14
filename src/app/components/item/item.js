import styles from "./item.module.css"
import Image from "next/image";
import Link from "next/link";
const Item = ({item}) => {
    return(
        <div className={styles.container}>
            <Link href ={`/${item.slug}`}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={item.image} alt={item.title} fill className={styles.img}/>
                </div>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.author}>{item.author.username}</p>
            </div>
            </Link>
        </div>
    )
}
export default Item