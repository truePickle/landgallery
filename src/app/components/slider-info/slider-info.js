"use client"
import Item from "@/app/components/item/item";

import Slider from "react-slick"
import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css"
import Image from "next/image";

const SliderComponent = () => {
    const [slidesToShow, setSlidesToShow] = useState(4); // Начальное количество отображаемых слайдов
    const [dots, setDots] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            // Изменение количества слайдов в зависимости от ширины окна
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
                setDots(true)
            } else if (window.innerWidth < 992) {
                setSlidesToShow(2);
                setDots(true)
            } else if (window.innerWidth < 1200) {
                setSlidesToShow(3);
                setDots(true)
            } else {
                setSlidesToShow(4);
                setDots(false)
            }
        };

        // Установка начального количества слайдов при загрузке страницы
        handleResize();

        // Добавление слушателя события изменения размера окна
        window.addEventListener("resize", handleResize);

        // Удаление слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: dots,
        accessibility: true,
        arrows: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,

    };


    return (
        <div>
            <button className="slick-prev" aria-label="Previous" type="button" >Previous</button>
        <Slider {...settings}>
            <div>
                <div className={styles.desc}>
                    <div className={styles.icons}>
                        <Image src={"/icons/aufhängen-bild.png"} alt={"Ready to hang"} fill></Image>
                    </div>
                    <div className={styles.text}>
                        <p className="mb-1">FERTIG ZUM AUFHÄNGEN</p><p></p>
                    <p>
                        Alle unsere Kunstwerke können nach dem Auspacken ganz einfach aufgehängt werden.
                    </p>
                    </div>
                </div>
            </div>
            <div>

                <div className={styles.desc}>
                    <div className={styles.icons}>
                        <Image src={"/icons/versiegelt.png"} alt={"Save to send"} fill></Image>
                    </div>
                    <div className={styles.text}>
                    <p>
                        SICHER VERPACKT</p>
                    <p></p>
                    <p>
                        Die Verpackungen der unseren Kunstwerke entsprechen immer den höchsten Standards, damit
                        sichergestellt werden kann, dass alles so einwandfrei bei dir ankommt, wie es losgeschickt
                        wurde.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.desc}>
                    <div className={styles.icons}>
                        <Image src={"/icons/kunstler.png"} alt={"Save to send"} fill></Image>
                    </div>
                    <div className={styles.text}>
                    <p className="mb-1">UNTERSTÜTZT ARTISTS</p>
                    <p></p>
                    <p>
                        Dein Kauf unterstützt das freie und unabhängige Arbeiten des Künstlers.
                    </p></div>

                </div>
            </div>
            <div>
                <div className={styles.desc}>
                    <div className={styles.icons}>
                        <Image src={"/icons/einfache-ruckgabe.png"} alt={"Save to send"} fill></Image>
                    </div>
                    <p className="mb-1">14 TAGE RÜCKGABERECHT</p><p></p><p>
                    Weil uns wichtig ist, dass du rundum glücklich mit deinem Kunstwerk bist, kannst du es 14 Tage lang
                    zurücksenden.
                </p>
                </div>
            </div>
        </Slider>
            <button className="slick-next" aria-label="Next" type="button">Next</button>
        </div>
    )
}
export default SliderComponent