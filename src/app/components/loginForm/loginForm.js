"use client"
import { login} from "@/lib/actions";
import {useFormState} from "react-dom"
import styles from "./loginForm.module.css";

import {useRouter} from "next/navigation";

import Link from "next/link";

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter()

    return (
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="username" name="username"/>
            <input type="password" placeholder="password" name="password"/>
            <button>Login</button>
            {state?.error}
            <Link href={"/register"}>
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>

    )
}

export default LoginForm