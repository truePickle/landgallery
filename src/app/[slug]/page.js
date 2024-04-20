import Image from "next/image";
import styles from "./productdetail.module.css"
import Link from "next/link";
import {getItem} from "@/lib/data";


const getData = async (slug)=>{
    const res = await fetch(`http://localhost:3000/api/item/${slug}`)
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()
}

// TODO: Add metadata for better search results
export const generateMetadata = async ({params}) => {
    const {slug} = params

    const item = await getItem(slug);
    return {
        title: item.title,
        description: item.description
    }
}
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