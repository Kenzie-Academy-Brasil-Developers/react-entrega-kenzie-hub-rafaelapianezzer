import { useContext, useState } from "react";
import { TechCard } from "../TechCard";
import MyContext from "../../MyContext";
import { createTechApi } from "../../services/api";
import styles from "./styles.module.scss";

export const TechList = () => {
  const { techs, setTechs } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleModal = () => {
    setIsOpen(!isOpen); 
  };

  const handleAddTechClick = async () => {
    const response = await createTechApi({
      "title": "React3",
      "status": "Iniciante"
    });

    if (response) {
      setTechs([...techs, response]);
      toggleModal(); 
    }
  };

  return (
    <main>
      <h3>Tecnologias</h3>
      <button onClick={toggleModal}>+</button> 
      
   
      {isOpen && (
        <div className={styles.modal}>
           <div className={styles.modalContent}>
          <div className={styles.headerModal}>
          <h3>Tecnologias</h3>
            <span className={styles.cloreButton} onClick={toggleModal}>
              &times;
            </span>
          </div>
         

           
            <form>
                <div>
                    <p>Cadastrar Tecnologia</p>
                    <button>x</button>
                </div>
             <select>
              <option value="">Selecione uma tecnologia</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            </form>
            <button onClick={handleAddTechClick}>Adicionar</button>
          </div>
        </div>
      )}

      <ul>
        {techs.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </ul>
    </main>
  );
};

export default TechList;
