import { useContext, useEffect, useState } from 'react'
import './MyPosts.css'
import { cpfContext } from '../../context/cpfContext'
import iData from '../../interface/iData'
import axios from 'axios'
import Verification from '../../components/Verificacao'
import { useNavigate } from 'react-router-dom'
import Sugestao from '../../components/BlocoSugestao'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'

export default function MyPosts () {
    const {validate, validateCPF} = useContext(cpfContext)
    const [posts, setPosts] = useState<iData[]>([])
    const [esconderCPF, setEsconderCPF] = useState(true);

    const navigate = useNavigate()
    Verification(validateCPF, navigate)

    useEffect(() => {
        axios.get('http://localhost:8080/envios')
        .then(response => setPosts(response.data))
    },[])

    const filter = posts.filter((e) => {
        return e.cpf === validateCPF.cpf
    })
    console.log(filter)

    return(
        <section className="my_posts">
            <h1 className="title">Meus posts </h1>
            <div className="centralize_personal_data">
                <div className="personal_data">
                    <p>Dados:</p>
                    <p>Nome: {validateCPF !== undefined && validateCPF.name}</p>
                    <div className="cpf_div">
                        <p>CPF: {esconderCPF? "___.___.___.-___" : validateCPF !== undefined && validateCPF.cpf}</p>
                        {esconderCPF? 
                        <AiOutlineEyeInvisible
                            className="icon"
                            onClick={() => setEsconderCPF(!esconderCPF)}
                        />
                         : <AiOutlineEye 
                            onClick={() => setEsconderCPF(!esconderCPF)} 
                            className="icon"
                         />}
                    </div>
                </div>
            </div>
            <div>
                {filter.map((e) => {
                    return (
                        <Sugestao titulo={e.title} texto={e.body} data={e.data} />
                    )
                })}
            </div>
        </section>
    )
}