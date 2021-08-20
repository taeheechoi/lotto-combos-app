import React, { createContext, useReducer } from 'react'
import topOccursInitialState from './topoccurrence/topOccursInitialState'
import topOccursReducer from './topoccurrence/topOccursReducer'
import winNumsInitialState from './winnums/winNumsInitialState'
import winNumsReducer from './winnums/winNumsReducer'
import winNumsCombosInitialState from './winnumscombo/winNumsCombosInitialState'
import winNumsCombosReducer from './winnumscombo/winNumsCombosReducer'

export const Context = createContext({})

export const Provider = ({children}) => {
    const [winNumsState, winNumsDispatch] = useReducer(winNumsReducer,winNumsInitialState)
    const [winNumsCombosState, winNumsCombosDispatch] = useReducer(winNumsCombosReducer,winNumsCombosInitialState)
    const [topOccursState, topOccursDispatch] = useReducer(topOccursReducer,topOccursInitialState)
    
    return (
       <Context.Provider
        value={{
            winNumsState,
            winNumsDispatch,
            winNumsCombosState,
            winNumsCombosDispatch,
            topOccursState,
            topOccursDispatch
            
        }}
       >
           {children}
       </Context.Provider>
    )
}

