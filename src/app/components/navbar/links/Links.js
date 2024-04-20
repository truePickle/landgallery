"use client"
import styles from "./links.module.css"
import NavLink from "@/app/components/navbar/links/navLink/navLink";
import {useState} from "react";
import {handleLogout} from "@/lib/actions";
const Links =  ({session}) =>{
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
    const [open, setOpen] = useState(false)
    //TEMPORARY

    const isAdmin = true
    return(
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key = {link.title}/>
            )))}{
                session?.user ? (
                    <>
                    {session?.user.isAdmin && (
                        <NavLink item={{title: "Admin", path: "/admin"}}/>
                    )}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ): (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
        }
        </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                            <NavLink item={link} key = {link.title}/>
                        ))}
                </div>
            }
        </div>


    )
}

export default Links