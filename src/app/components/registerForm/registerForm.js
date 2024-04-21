"use client"
import {register} from "@/lib/actions";
import { useFormState } from "react-dom"
import styles from "./registerForm.module.css";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {error} from "next/dist/build/output/log";
import Link from "next/link";
const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter()
    useEffect(() => {
        state?.success && router.push("/login")
    }, [router, state?.success]);
    return(
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="username" name="username"/>
            {state?.error.includes("Username") && <p className={styles.error}>{state.error}</p>}
            <input type="text" placeholder="email" name="email"/>
            {state?.error.includes("email") && <p className={`${styles.error} active`}>{state.error}</p>}
            <input type="password" placeholder="password" name="password"/>
            {state?.error.includes("Password") && <p className={`${styles.error} active`}>{state.error}</p>}
            <input type="password" placeholder="password again" name="passwordRepeat"/>
            {state?.error.includes("Password") && <p className={`${styles.error} active`}>{state.error}</p>}
            <button>Register</button>
            <Link href={"/login"}>
                Have an account? <b>Login</b>
            </Link>
        </form>

    )
}

export default RegisterForm