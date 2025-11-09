import { useEffect, useState } from "react"

interface Consulta {
    id:number,
    cpf:number
}

function Pacientes(){

    const [consulta,setConsulta] = useState<Consulta[]>([])
    
    function getConsulta(){
        fetch("https://preztech-561497.onrender.com/consultas")
        .then(response => response.json())
        .then(data => {return data as Consulta})
    }

    useEffect( () => getConsulta(), [])
    
    return(
        
        <>
        </>
    )
}

export default Pacientes