import { useContext, useEffect, useState } from 'react'
import './MyPosts.css'
import { cpfContext } from '../../context/cpfContext'
import iData from '../../interface/iData'
import axios from 'axios'
import Verification from '../../components/Verificacao'
import { useNavigate } from 'react-router-dom'
import Sugestao from '../../components/BlocoSugestao'

export default function MyPosts () {
    const {validate, validateCPF} = useContext(cpfContext)
    const [posts, setPosts] = useState<iData[]>([])
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
        <section>
            <h1>Meus posts: </h1>
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