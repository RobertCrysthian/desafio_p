import './Login.css'
import {useState, useContext, useEffect} from 'react'
import {cpfContext } from '../../context/cpfContext'
import axios, { AxiosResponse } from 'axios'
import { cpf }  from 'cpf-cnpj-validator'

export default function Login() {

    const [dataApi, setDataApi] = useState<AxiosResponse<any, any>>()
    const [cpfs, setCpfs] = useState<AxiosResponse<any, any>>();

    
    useEffect(() => {
        axios.get('http://localhost:8080/envios')
        .then(resposta => setDataApi(resposta.data))
    
        axios.get('http://localhost:8080/cpf_list')
        .then(resposta => setCpfs(resposta.data))
    },[])

    const [inputData, setInputData] = useState<any>()
    const {validate, validateCPF} = useContext(cpfContext)

    const submitForm = (event: any) => {
        event.preventDefault()

        validate(cpfs, inputData)
    }
    

    return(
        <section className='login'>
            <form onSubmit={submitForm}>
                <label>Informe seu cpf</label>
                <input placeholder="CPF (apenas números)" onBlur={() => setInputData(cpf.format(inputData))} value={inputData} maxLength={11} onChange={e => setInputData(e.target.value)}/>
                <button>Entrar</button>
            </form>
        </section>
    )
}