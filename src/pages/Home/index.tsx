import {useContext, useEffect} from 'react'

import { cpfContext } from '../../context/cpfContext'
import { useNavigate } from 'react-router-dom'


export default function Home() {

    const { validateCPF, setValidateCPF} = useContext(cpfContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(validateCPF === undefined) {
            navigate('/')
    }
    })

    const logOff = () => {
        setValidateCPF(undefined)
        navigate('/')
        console.log(validateCPF)
    }


    return(
        <section className='home'>
            <p>Olá {validateCPF && validateCPF.name}</p>
            <p>Você logou com o cpf: {validateCPF && validateCPF.cpf}</p>
            <button onClick={logOff}>Deslogar</button>
        </section>
    )
}