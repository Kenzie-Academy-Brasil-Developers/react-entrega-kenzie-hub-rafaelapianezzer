import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";


export const LoginPage = ({setUser}) => {
    return (
        <main>
            <Header showButton={false}/>
            <FormLogin setUser={setUser}/>
        </main>
    )
}