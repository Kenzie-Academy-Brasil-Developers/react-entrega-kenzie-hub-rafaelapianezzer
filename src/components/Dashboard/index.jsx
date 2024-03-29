import styles from "./styles.module.scss"

export const Dashboard = ({user}) => {
    return(
        <main className={styles.pageContainer}>
            <div className={styles.titlePage}>
                <div className={styles.titleName}>
                <h3>Olá, {user.name}</h3>
                <p>{user.course_module}</p>

                </div>
               
               
            </div>
            <div className={styles.message}>
                <h3>Que pena! Estamos em desenvolvimento :(</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
            </div>
        </main>
    )
}