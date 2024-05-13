import styles from './productdetail.module.css';
import {getItem} from '@/lib/data';
import PresentationContainer from "@/app/components/presentation-container/presentation-container";


const ProductDetail = async ({params}) => {
    //const [selectedSize, setSelectedSize] = useState(null);
    const {slug} = params
    const item = await getItem(slug)

    return (
        <div className={styles.container}>
            {item?.image &&
                <PresentationContainer image={item.image}/>
            }

            <div className={styles.detailsContainer}>
                <h1>{item.title}</h1>

                <p>Author: {item.author}</p>


                <div className={styles.buttonsContainer}>
                    <button>Add to Cart</button>
                    <button>Add to Favorites</button>
                </div>
                <p>{item.description}</p>
            </div>
        </div>
    );
};


export default ProductDetail;
