import styles from "./homepage.module.css"
import Item from "@/app/components/item/item";
import {getItem, getItems} from "@/lib/data";
// TODO: Add metadata for better search results

const getData = async ()=>{
    const res = await fetch("http://localhost:3000/api/item")
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()
}
const Homepage = async () => {

    const items = await getItems()
    console.log(items)
    return(
        <div className={styles.container}>
            {items.map(item => (
                <div className={styles.item} key ={item.id}>
                    {item && <Item item = {item}/>}
                </div>
            ))}
        </div>
    )
}
export default Homepage