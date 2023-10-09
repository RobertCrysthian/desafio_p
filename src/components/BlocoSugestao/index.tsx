import { useState } from 'react'
import './BlocoSugestao.css'
import {AiFillDislike as DislikeFill} from 'react-icons/ai'
import {AiOutlineDislike as DislikeLine} from 'react-icons/ai'
import {AiFillLike as LikeFill} from 'react-icons/ai'
import {AiOutlineLike as LikeOutline} from 'react-icons/ai'

export default function Sugestao({titulo, texto, data}: {titulo:string, texto: string, data: string}) {
    const [likeActivator, setLikeActivator] = useState(false)
    const [dislikeActivator, setDislikeActivator] = useState(false)


    return(
        <section className="sugestao">
            <div className="div_campo_geral">
                <div className="titulo">
                    <h1>{titulo}</h1>
                </div>
                <div className="corpo">
                    <p>{texto}</p>
                    <p>{data}</p>
                </div>
            </div>
            <div className="div_button">
            <button onClick={() => setLikeActivator(!likeActivator)}>{likeActivator? <LikeFill/> : <LikeOutline/>}</button>
            <button onClick={() => setDislikeActivator(!dislikeActivator)}>{dislikeActivator? <DislikeFill/> : <DislikeLine/>}</button>
        </div>
        </section>

    )
}