import {createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const cpfContext = createContext();



export const CpfProvider = ({children}
    ) => {
    const [validateCPF, setValidateCPF] = useState()
    const navigate = useNavigate();

    const validate = (cpfList ,input) => {
        var findCPF = cpfList.find((e) => {
           return e.cpf === input
        })
        if (findCPF !== undefined) {
            setValidateCPF(findCPF)
            navigate('./home')
        }
    }
    return <cpfContext.Provider value={{validate, validateCPF, setValidateCPF}}>{children}</cpfContext.Provider>

}