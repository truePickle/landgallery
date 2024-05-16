import styles from './productdetail.module.css';
import {getItem, getItemsFromUser} from '@/lib/data';

import PresentationContainer from "@/app/components/presentation-container/presentation-container";
import Link from "next/link";

import Item from "@/app/components/item/item";
import SliderComponent from "@/app/components/slider-info/slider-info";
import {Suspense} from "react";
import SliderArtist from "@/app/components/slider-artist-images/slider-artist";

const ProductDetail = async ({params}) => {
    const {slug} = params

    const item = await getItem(slug)

    return (
        <section className={styles.preview}>
            <div className={styles.areaPreview}>
                {item?.image ?
                    (<Suspense fallback={<div>Loading...</div>}>
                        <PresentationContainer image={item.image}/>
                    </Suspense>) :
                    <div> There is no Image? WAAAAT?</div>
                }
            </div>
            <div className={styles.detailsContainer}>
                <h1>{item.title}</h1>

                {item.author?.username ?
                    (<Link href={`artist/${item.author.userId}`}>
                        {item.author.username}</Link>
                    )
                    : (<p>Author: {item.author}</p>
                    )
                }
                <hr className="mb-1"></hr>
                {item.sizes && Array.isArray(item.sizes) && item.sizes.length > 0 ? (
                    <div className={styles.sizes}>
                        <p></p>
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
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="9WR7T6BACXD2J" />
                        <input type="hidden" name="currency_code" value="EUR" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                    </form>
                </div>

            </div>
            <div className={styles.content}>
                <section className={styles.otherProducts}>
                    <div className={styles.artist}>
                        <h2>Weitere Werke von {item.author.username}</h2>
                        <div className={styles.artistPageLink}>
                            <Link href={`/artist/${item.author.userId}`}> ALLE KUNSTWERKE DES KÜNSTLERS</Link>
                        </div>
                        <div>
                            {/*{ items && <SliderArtist data ={items}></SliderArtist>}*/}
                        </div>
                    </div>
                    <hr className={styles.divider}></hr>
                    {/*<div className={styles.otherRec}>
                        {otherRec.map(item => (
                            <Item item={item} key={item.id}/>
                        ))}
                    </div>
                    <hr className={styles.divider}></hr>*/}
                    <section className={styles.infoOrder}>
                        <SliderComponent/>
                    </section>
                    <hr className={styles.divider}></hr>
                </section>
            </div>

        </section>
    );
};


export default ProductDetail;
