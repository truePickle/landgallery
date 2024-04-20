import {register} from "@/lib/actions";
import style from "./register.module.css"

const RegisterPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <form action={register} className={style.form}>
                    <input type="text" placeholder="username" name="username"/>
                    <input type="text" placeholder="email" name="email"/>
                    <input type="password" placeholder="password" name="password"/>
                    <input type="password" placeholder="password again" name="passwordRepeat"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage