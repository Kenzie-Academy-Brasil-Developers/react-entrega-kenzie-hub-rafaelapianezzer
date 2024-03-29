import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";


export const DashboardPage = () => {
    return (
        <main>
             <Header mostrarSair={true} />
             <Dashboard  />
        </main>
    )
}