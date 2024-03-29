import { useContext } from "react";
import { TechList } from "../TechList"
import styles from "./styles.module.scss"
import MyContext from "../../MyContext";

export const Dashboard = ( ) => {
    
    const { user } = useContext(MyContext);
 
    return (
        <main className={styles.pageContainer}>
            <div className={styles.titlePage}>
                <div className={styles.titleName}>
                    <h3>Olá, {user.name}</h3>
                    <p>{user.course_module}</p>
                </div>
            </div>
            <div className={styles.message}>
                <TechList />
            </div>
        </main>
    )
}