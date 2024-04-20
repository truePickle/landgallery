import {handleGitHubLogin, login} from "@/lib/actions"

const LoginPage = () => {

    return(
        <div>
            <form action={handleGitHubLogin}>
                <button >Login with Github</button>
            </form>
            <form action={login}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginPage