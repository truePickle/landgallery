import styles from "./postUser.module.css"
const getData  = async (userId) => {
    return userId
}
const PostUser = async ({userId}) => {
    const user = await getData(userId)
    return(
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>

        </div>
    )
}