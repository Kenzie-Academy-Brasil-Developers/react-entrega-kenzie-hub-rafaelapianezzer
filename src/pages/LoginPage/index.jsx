import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";


export const LoginPage = () => {
    return (
        <main>
            <Header showButton={false}/>
            <FormLogin/>
        </main>
    )
}