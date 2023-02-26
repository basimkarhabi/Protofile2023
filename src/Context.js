import { createContext, useReducer } from "react";
//1- Creat Context
export const themeContext = createContext();
//2- Creat State
const initialState = { darkMode: false };
//3- create our Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { darkMode: !state.darkMode };
      default:
        return state;
  }
};
//4- crear prvider
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};