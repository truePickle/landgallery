import styles from "./thumbnail.module.css"
const Thumbnail = ({background, artwork, onClick}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(background, artwork); // Передаем интерьер и изображение обработчику onClick
        }
    };
    return (
        <div className={styles.thumbnail} onClick={handleClick}>
            {background ? (
                <>
                    <div className={styles.background} style={{backgroundImage: `url(${background})`}}></div>
                    <div className={styles.artwork} style={{backgroundImage: `url(${artwork})`}}></div>
                </>
            ) : (
                <div className={styles.artworkFull} style={{backgroundImage: `url(${artwork})`}}></div>
            )}
        </div>
    );
}

export default Thumbnail