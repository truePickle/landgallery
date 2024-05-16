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
        /*{
            title: "About",
            path: "/about"
        },*/
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Galleries",
            path:"/gallery"
        }
    ]
    const [open, setOpen] = useState(false)
// Function to handle link click
    const handleLinkClick = () => {
        // Collapse the mobile links by setting open to false
        setOpen(false);
    };
    return(
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key = {link.title} onClick = {handleLinkClick}/>
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
                            <NavLink item={link} key = {link.title} onClick={handleLinkClick}/>
                        ))}
                </div>
            }
        </div>


    )
}

export default Links