import styles from './productdetail.module.css';
import {getItem, getItemsFromUser} from '@/lib/data';

import PresentationContainer from "@/app/components/presentation-container/presentation-container";
import Link from "next/link";

import Item from "@/app/components/item/item";

const ProductDetail = async ({params}) => {
    //const [selectedSize, setSelectedSize] = useState(null);
    const {slug} = params
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const item = await getItem(slug)
    const otherRec = await getItemsFromUser(item.author.userId)

    const sizes = item.sizes

    return (
        <section className={styles.preview}>
            <div className={styles.areaPreview}>
                {item?.image &&
                    <PresentationContainer image={item.image}/>
                }
            </div>
            <div className={styles.detailsContainer}>
                <h1>{item.title}</h1>
                {item.author?.username ?
                    (<Link href={`artist/${item.author.userId}`}>{item.author.username}</Link>)
                    : (<p>Author: {item.author}</p>)}
                {item.sizes && Array.isArray(item.sizes) && item.sizes.length > 0 ? (
                    <div className={styles.sizes}>
                        <span>Grösse:</span>
                        {item.sizes.map((size, index) => (
                            <div key={index}>
                                {size.width} x {size.height}
                            </div>
                        ))}

                    </div>
                ) : (
                    <p>No available sizes .(</p>
                )}

                {item.description && <p>{item.description}</p>}

                <div className={styles.buttonsContainer}>
                    <button>Add to Cart</button>
                    <button>Add to Favorites</button>
                </div>

            </div>
            <div className={styles.content}>
                <section className={styles.otherProducts}>
                    <h2>Weitere Werke von {item.author.username}</h2>
                    <div className={styles.artistPageLink}>
                        <Link href={`/artist/${item.author.userId}`}> ALLE KUNSTWERKE DES KÜNSTLERS</Link>
                    </div>
                    <div className={styles.otherRec}>
                        {otherRec.map(item => (
                            <Item item={item} key={item.id}/>
                        ))}
                    </div>

                </section>
            </div>

        </section>
    );
};


export default ProductDetail;
