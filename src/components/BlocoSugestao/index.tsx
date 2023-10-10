import { useState } from 'react'
import './BlocoSugestao.css'
import {AiFillDislike as DislikeFill} from 'react-icons/ai'
import {AiOutlineDislike as DislikeLine} from 'react-icons/ai'
import {AiFillLike as LikeFill} from 'react-icons/ai'
import {AiOutlineLike as LikeOutline} from 'react-icons/ai'

export default function Sugestao({titulo, texto, data}: {titulo:string, texto: string, data: string}) {
    const [likeActivator, setLikeActivator] = useState(false);
    const [dislikeActivator, setDislikeActivator] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    const changeLike = () => {
        if(dislikeActivator === true) {
            setDislikes(dislikes-1)
            setDislikeActivator(false)
        }

        setLikeActivator(!likeActivator)
        if(likeActivator === true ) {
            setLikes(likes-1)
        } else {
            setLikes(likes+1)
        }
    }

    const changeDislike = () => {
        if(likeActivator === true) {
            setLikes(likes-1)
            setLikeActivator(false)

        }

        setDislikeActivator(!dislikeActivator)
        if(dislikeActivator === true ) {
            setDislikes(dislikes-1)
        } else {
            setDislikes(dislikes+1)
        }
    }


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
            <button onClick={changeLike} className="like"> <h1>{likes}</h1> {likeActivator? <LikeFill className='icone'/> : <LikeOutline className='icone'/>}</button>
            <button onClick={changeDislike} className="dislike"><h1>{dislikes}</h1> {dislikeActivator? <DislikeFill className='icone' /> : <DislikeLine className='icone'/>}</button>
        </div>
        </section>

    )
}