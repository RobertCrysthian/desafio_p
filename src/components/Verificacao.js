import { useEffect } from "react"


export default function Verification(CPF, navigate) {
    useEffect(() => {
        if(CPF === undefined) {
            navigate('/')
    }
    })
}