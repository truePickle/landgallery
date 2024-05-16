import Links from "@/app/components/navbar/links/Links";
import style from "./navbar.module.css"
import {auth} from "@/lib/auth";
import Link from "next/link";
import styles from "@/app/components/slider-info/slider.module.css";
import Image from "next/image";
import React from "react";
const Navbar = async () => {
    const session = await auth()
    console.log(session)
    return(
        <div className={style.container}>
            <div className={style.logo}><Link href="/" >
                <div className={styles.icons}>
                <Image src={"/icons/logo.png"} alt={"Logo"} fill></Image>
            </div></Link></div>
            <div><Links session={session}/></div>
        </div>
    )
}

export default Navbar