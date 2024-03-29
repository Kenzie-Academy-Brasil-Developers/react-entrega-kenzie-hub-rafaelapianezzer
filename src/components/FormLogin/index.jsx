import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver} from "@hookform/resolvers/zod";
import { formSchemaLogin } from "../Input/formSchema";
import { userLoginApi } from "../../services/api";
import styles from "./styles.module.scss"



export const FormLogin = ({setUser}) => {
    const navigate = useNavigate()
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchemaLogin),
   });

   const submit = async (formLoginData) => {
    const userData = await userLoginApi(formLoginData)
    if (userData){
    setUser(userData.user)
    localStorage.setItem("token", userData.token )
    navigate("/dashboard")
}
    else
    alert("erro")
   }

   


    return (
        <main className={styles.containerLogin}>
            <h1 className={"title2"}>Login</h1>
            <form onSubmit={handleSubmit(submit)} className={styles.formLogin}>
                <p className={"paragraph"}>Email</p>
                <Input  className={"paragraph"} label="Email" type="email" placeholder="Seu email" {...register("email")} error={errors.email} />
                <p className={"paragraph"}>Senha</p>
                <Input label="Senha" className={"paragraph"} type="password" placeholder="Digite sua senha" {...register("password")} error={errors.password} />
                <div className={styles.buttonFormLogin}>
                <button type="submit" className={`${styles.buttonEntry} paragraph`}>Entrar</button>

                    <p className={"headline"}>Ainda não possui uma conta?</p>
                    <Link to="/register">
                        <button type="button" className={`${styles.buttonCad} paragraph`}>Cadastre-se</button>
                    </Link>
                </div>
            </form>
        </main>
    )
}