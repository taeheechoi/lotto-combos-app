import React, { createContext, useReducer } from 'react'
import winNumsInitialState from './winnums/winNumsInitialState'
import winNumsReducer from './winnums/winNumsReducer'
import winNumsCombosInitialState from './winnumscombo/winNumsCombosInitialState'
import winNumsCombosReducer from './winnumscombo/winNumsCombosReducer'

export const Context = createContext({})

export const Provider = ({children}) => {
    const [winNumsState, winNumsDispatch] = useReducer(winNumsReducer,winNumsInitialState)
    const [winNumsCombosState, winNumsCombosDispatch] = useReducer(winNumsCombosReducer,winNumsCombosInitialState)
    
    return (
       <Context.Provider
        value={{
            winNumsState,
            winNumsDispatch,
            winNumsCombosState,
            winNumsCombosDispatch
        }}
       >
           {children}
       </Context.Provider>
    )
}

