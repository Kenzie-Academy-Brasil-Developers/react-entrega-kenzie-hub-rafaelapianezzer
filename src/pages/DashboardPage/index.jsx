import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";


export const DashboardPage = ({user, setUser}) => {
    return (
        <main>
             <Header mostrarSair={true}  setUser={setUser}/>
             <Dashboard user={user} />
        </main>
    )
}