import Image from "next/image";
import styles from "./productdetail.module.css"
import Link from "next/link";
const ProductDetail = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/test.jpg" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1>Title</h1>
                <div>
                    <span>Author</span>
                </div>
                <div>
                    <span>Size of pic</span>
                    <button>100x100</button>
                    <button>50x50</button>
                </div>
            </div>
            <div className={styles.buyContainer}>
                <Link href="/">Buy</Link>
            </div>
        </div>
    )
}
export default ProductDetail