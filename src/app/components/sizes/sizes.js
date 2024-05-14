"use client"
import {useState} from 'react';
import styles from "./sizes.module.css";

const SizesComponent = ({item}) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className={styles.container}>
            <div className={styles.sizes}>
                <span>Grösse:</span>
                {item.sizes.map((size, index) => (
                    <button
                        key={index}
                        className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                        onClick={() => handleSizeSelect(size)}
                    >
                        {size.width} x {size.height}
                    </button>
                ))}
            </div>
        </div>


    );
}

export default SizesComponent