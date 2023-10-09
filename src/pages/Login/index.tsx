import './Login.css'
import {useState, useContext} from 'react'
import cpfList from '../../db.json'
import {useNavigate} from 'react-router-dom'
import {cpfContext } from '../../context/cpfContext'

export default function Login() {

    const [inputData, setInputData] = useState<any>()
    const navigate = useNavigate();
    const {validate, validateCPF} = useContext(cpfContext)

    const submitForm = (event: any) => {
        event.preventDefault()

        validate(cpfList.cpf_list, inputData)
        if(validateCPF !== undefined) {
            navigate('./home')
        }
        console.log(validateCPF)

    }

    return(
        <section className='login'>
            <form onSubmit={submitForm}>
                <label>Informe seu cpf</label>
                <input value={inputData} onChange={e => setInputData(e.target.value)}/>
                <button>Entrar</button>
            </form>
        </section>
    )
}