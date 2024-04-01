
import { deleteTechApi, updateTechApi } from "../../services/api"
import MyContext from "../../MyContext";
import { useContext } from "react";

export const TechCard = ({ tech }) => {
    const { techs, setTechs } = useContext(MyContext);

    const updateTechById = (techs, updatedTech) => {
        return techs.map((tech) => {
            if (tech.id === updatedTech.id) {
                return updatedTech;
            }
            return tech;
        });
    };
    const handleUpdateClick = async () => {
        const response = await updateTechApi(tech.id, {
            "status": "avançado"
        })
        const updatedTechs = updateTechById(techs, response);
        setTechs(updatedTechs);
    }



    const removeTechById = (techs, techIdToRemove) => {
        return techs.filter((tech) => tech.id !== techIdToRemove);
    };
    const handleDeleteClick = async () => {
        const response = await deleteTechApi(tech.id)
        if (response) {
            const updatedTechs = removeTechById(techs, tech.id);
            setTechs(updatedTechs);
        }
    }

    return (
        <li>
            <div>
                <h4>{tech.title}</h4>
            </div>
            <div>
                <p>{tech.status}</p>
                <button onClick={handleUpdateClick}>editar</button> /  <button onClick={handleDeleteClick}>excluir</button>
            </div>
            <br />
        </li>
    )
}