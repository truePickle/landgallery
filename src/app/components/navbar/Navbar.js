import Links from "@/app/components/navbar/links/Links";
import style from "./navbar.module.css"
const Navbar = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>Logo</div>
            <div><Links/></div>
        </div>
    )
}

export default Navbar