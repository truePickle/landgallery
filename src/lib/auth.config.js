export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({auth, request}) {
            return false
        }
    }
}