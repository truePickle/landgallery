import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.row}>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </div>

                <div className={styles.row}>
                    <ul>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className={styles.row}>
                    Landgallery Copyright © 2024 Landgallery - All rights reserved
                </div>
            </div>
        </footer>

    )
}

export default Footer