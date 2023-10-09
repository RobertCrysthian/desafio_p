import { useContext, useState } from 'react'
import './Form.css'
import { cpfContext } from '../../context/cpfContext'
import axios from 'axios'
import Verification from '../../components/Verificacao'
import { useNavigate } from 'react-router-dom'

export default function Form () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const {validate, validateCPF, useValidateCPF} = useContext(cpfContext)
    const navigate = useNavigate()

    Verification(validateCPF, navigate)

    
    const date = new Date();

    
    const formatMap = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    };


    console.log(formatMap)

    const submitData = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:8080/envios', {
            name: validateCPF.name,
            cpf: validateCPF.cpf,
            title: title,
            body: body,
            data: date
        })
        alert("Dados enviados com sucesso!")
    }


    return (
            <form className="section_form" onSubmit={submitData}>
                <h1>Formulário para envio da sugestão</h1>
                <p>Informe o título:</p>
                <textarea 
                    placeholder='Informe o título aqui' 
                    className="title_form"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p>Descreva a sua sugestão</p>
                <textarea 
                    placeholder='Descreva a sugestão aqui' 
                    className="body_form" 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button>Enviar</button>
            </form>
    )
}