import { Outlet, useNavigate } from 'react-router-dom'
import './Header.css'
import { cpfContext } from '../../context/cpfContext'
import { useContext } from 'react'


export default function Header () {
    const { validateCPF, setValidateCPF} = useContext(cpfContext)
    const navigate = useNavigate()

    const logOff = () => {
        setValidateCPF(undefined)
        navigate('/')
        console.log(validateCPF)
    }


    return (
        <header className="header">

           <div className="header_div">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <button onClick={() => navigate('./home')}>Home</button>
                    <button onClick={() => navigate('./form')}>Mandar sugestão</button>
                    <button onClick={() => navigate('./myposts')}>Meus Posts</button>
                    <button onClick={logOff}>Deslogar</button>
                    
                </div>
            </div> 
            <Outlet />
        </header>
    )
}