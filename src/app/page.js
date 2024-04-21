import styles from "./homepage.module.css"
import Item from "@/app/components/item/item";
import {getItems} from "@/lib/data";
// TODO: Add metadata for better search results

const getData = async ()=>{
    const res = await fetch("http://localhost:3000/api/item")
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()
}
const Homepage = async () => {
    //Fetch data with an API
    const items = await getData()
    //Fetch data without an API
    const item = await getItems()
    return(
        <div className={styles.container}>
            {items.map(item => (
                <div className={styles.item} key ={item.id}>
                    <Item item = {item}/>
                </div>
            ))}
        </div>
    )
}
export default Homepage