"use client"
import {handleGitHubLogin, login} from "@/lib/actions";
import {useFormState} from "react-dom"
import styles from "./loginForm.module.css";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {error} from "next/dist/build/output/log";
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