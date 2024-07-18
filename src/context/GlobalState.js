import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";
const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, favoriteBasket: state.favoriteBasket ,user: state.user,    dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
