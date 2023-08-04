import styles from './styles.module.css'

const Main=()=>{


    const handleLogout=()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <div className={styles.main}__container>
            <nav className={styles.navbar}>
                <h1>fakebook</h1>
                <button className={styles.white_btn} onclick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default Main