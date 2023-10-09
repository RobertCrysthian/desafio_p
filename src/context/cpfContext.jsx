import {createContext, useState} from 'react'

export const cpfContext = createContext();



export const CpfProvider = ({children}
    ) => {
    const [validateCPF, setValidateCPF] = useState()

    const validate = (cpfList ,input) => {
        var findCPF = cpfList.find((e) => {
           return e.cpf === input
        })
        if (findCPF !== undefined) {
            return setValidateCPF(findCPF)
        }
    }
    return <cpfContext.Provider value={{validate, validateCPF, setValidateCPF}}>{children}</cpfContext.Provider>

}