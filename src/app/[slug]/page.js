"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './productdetail.module.css';
import { getItem } from '@/lib/data';

const ProductDetail = ({ params }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const {slug} = params
    const item = getItem(slug)
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        // Добавить выбранный товар в корзину
    };

    const handleAddToFavorites = () => {
        // Добавить выбранный товар в избранное
    };

    return (
        <div className={styles.container}>
            <div className={styles.previewContainer}>
                {/* Предпросмотр изображений, можно добавить листание */}
                {item?.image && (
                    <Image src={"../public/test.jpg"} alt={item.title} width={300} height={200} />
                )}
            </div>
            <div className={styles.detailsContainer}>
                <h1>{item.title}</h1>
                <p>Author: {item.author}</p>


                <div className={styles.buttonsContainer}>
                    {/* Кнопки для добавления в избранное и корзину */}
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <button onClick={handleAddToFavorites}>Add to Favorites</button>
                </div>
                <p>{item.description}</p>
            </div>
        </div>
    );
};


export default ProductDetail;
