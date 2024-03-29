import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"


export const Header = ({ mostrarSair, setUser, showButton=true }) => {
    const navigate = useNavigate()
    const logout = () => {
        setUser(null)
        localStorage.removeItem("user");
        navigate("/")
    }




    return (
        <header className={`${styles.header} title2`}>
            <h1>Kenzie Hub</h1>
            {showButton && 
            <Link to="/">
                {mostrarSair ?
                <button onClick={logout} className={"headlineBold"}>Sair</button> : <button onClick={() => navigate(-1)}  className={`'${styles.buttonHeader} headlineBold`}>Voltar</button>}
            </Link>}


        </header>
    )
}