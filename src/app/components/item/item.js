import styles from "./item.module.css"
import Image from "next/image";
import Link from "next/link";
const Item = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/test.jpg" alt="Test image" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.author}>Author</p>
                <Link href ="/detail">DETAILS</Link>
            </div>
        </div>
    )
}
export default Item