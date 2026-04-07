import { createContext } from "react";

export const MainContext = createContext();

export const AppContext = (props) =>{
  const value = {
    name1 :"Devaratha Raisar"
  }
  return (
    <MainContext.Provider value={value} >
      {props.children}
    </MainContext.Provider>
  )

}