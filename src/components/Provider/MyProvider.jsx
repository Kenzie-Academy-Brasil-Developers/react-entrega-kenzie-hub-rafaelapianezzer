import { useState } from 'react';
import MyContext from '../../MyContext';

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState(null);

  return (
    <MyContext.Provider value={{ user, setUser,techs, setTechs }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
