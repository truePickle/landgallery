import Links from "@/app/components/navbar/links/Links";
import style from "./navbar.module.css"
import {auth} from "@/lib/auth";
import Link from "next/link";
const Navbar = async () => {
    const session = await auth()
    console.log(session)
    return(
        <div className={style.container}>
            <div className={style.logo}><Link href="/" >Logo</Link></div>
            <div><Links session={session}/></div>
        </div>
    )
}

export default Navbar