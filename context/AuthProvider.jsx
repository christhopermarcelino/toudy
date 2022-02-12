import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const UserDispatchContext = createContext();

export default function AuthProvider({ children }) {
  const [user, dispacth] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispacth}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
export const useDispatch = () => useContext(UserDispatchContext);
