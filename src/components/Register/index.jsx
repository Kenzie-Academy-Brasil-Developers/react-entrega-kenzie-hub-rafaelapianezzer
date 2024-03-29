import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../Input/formSchema";
import { userRegisterApi } from "../.././services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./styles.module.scss"

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        const response = await userRegisterApi(data);
        if (response)
            toast.success("Conta criada com sucesso!");
        else toast.error('Ops! Algo deu errado')
    };

    return (
        <main className={styles.registerContainer}>
            <h1 className={"title2"}>Crie sua conta</h1>
            <p className={"headline"}>Rápido e grátis, vamos nessa</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
                <p>Nome</p>
                <Input label="Nome" type="text" placeholder="Digite seu nome" {...register("name")} error={errors.name} />
                <p>Email</p>
                <Input label="Email" type="email" placeholder="Digite seu email" {...register("email")} error={errors.email} />
                <p>Senha</p>
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />
                <p>Confirmar senha</p>
                <Input label="Confirmar senha" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} error={errors.confirmPassword} />
                <p>Bio</p>
                <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} error={errors.bio} />
                <p>Contato</p>
                <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} error={errors.contact} />
              
                    <p>Selecionar módulo</p>
                    <select id="escolha" name="escolha" {...register("course_module")} className={"headline"}>
                        <option value="modulo1" className={"headline"}>Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="modulo2" className={"headline"}>Segundo módulo (Frontend Avançado)</option>
                        <option value="modulo3" className={"headline"}>Terceiro módulo (Introdução ao Backend)</option>
                        <option value="modulo4" className={"headline"}>Quarto módulo (Backend Avançado)</option>
                    </select>
               
                <ToastContainer />
                <button type="submit" className={"paragraph"}>Cadastrar</button>
            </form>
        </main>
    );
};
