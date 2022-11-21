import React, { useState } from "react";


const LechContext = React.createContext({
    emptyValue:''
})


export const LechContextWrapper = (props) => {


    const [menuState, setMenuState] = useState(false)
  
    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
  
    return(
        <LechContext.Provider value={{
            menuState:menuState,
            onMenuState:menuStateHandler,
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}