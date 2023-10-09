import {useContext, useEffect, useState} from 'react'

import './Home.css'

import { cpfContext } from '../../context/cpfContext'
import { useNavigate } from 'react-router-dom'
import Sugestao from '../../components/BlocoSugestao'
import axios from 'axios'
import iData from '../../interface/iData'
import Verification from '../../components/Verificacao'


export default function Home() {
    const [posts, setPosts] = useState<iData[]>([])

    useEffect(() => { 
        axios.get('http://localhost:8080/envios')
        .then(response => setPosts(response.data))
    }, [])

    const { validateCPF} = useContext(cpfContext)
    const navigate = useNavigate()

     Verification(validateCPF, navigate)

    console.log(posts)


    return(
        <section className='home'>
            <div className="home_div">
                <p>Olá {validateCPF && validateCPF.name}</p>
                <p>Você logou com o cpf: {validateCPF && validateCPF.cpf}</p>
            </div>
            {posts.map((e: any) => {
                return (
                    <Sugestao titulo={e.title} texto={e.body} data={e.data}/>
                )
            })}
        </section>
    )
}