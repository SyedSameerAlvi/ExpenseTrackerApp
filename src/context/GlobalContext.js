import React,{ createContext ,useReducer  } from 'react';
import AppReducer from './AppReduser';

const initialState = {
    transactions: []
}

// create global context 
export const GlobalContext = createContext(initialState);

// create provider for global context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // delete transaction
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // add transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}