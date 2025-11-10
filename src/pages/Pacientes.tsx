import {useState } from "react"
import Input from '../componentes/input'
import Button from "../componentes/button"
import useForm from "../hooks/use-form"
import type { FormState } from "../hooks/use-form"
import { useRef } from 'react'

interface Consulta {
    id:number,
    cpf:number
}

function Pacientes(){

    const [consultas,setConsultas] = useState<Consulta[]>([])
    
    const formRef = useRef<HTMLFormElement>(null) as React.RefObject<HTMLFormElement>

    async function getConsulta(id_cons: number): Promise<Consulta[]>{
        const url = `https://preztech-561497.onrender.com/consultas/${id_cons}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        return data as Consulta[];
    }
    const initialLoginForm = {
    pesquisa: ''
  }
  const {
    data: {
      pesquisa,
    },
    loadingSubmit,
    handleChange,
    handleSubmit,
    errorsCount
  } = useForm(
    formRef,
    initialLoginForm,
    submitCallback,
    submitErrorCallback
  )

  async function submitErrorCallback(error: Error) {
    if (error.cause && Object.keys(error.cause).length) {
      let message = 'Erro ao realizar pesquisar:\n\n'

      for (const key in error.cause) {
        const causes = error.cause as { [key: string]: string[]}
        message += `- ${causes[key]}\n`
      }

      return window.alert(message)
    }

    return window.alert(error.message)
  }

    async function submitCallback(values: FormState) 
    {
        
        const idPaciente = Number(values.pesquisa);

        if (isNaN(idPaciente)) {
            // useForm deve ser capaz de lidar com isso, mas se não for,
            // você precisaria de um mecanismo de erro aqui.
            console.error("ID inválido");
            return; 
        }

        try {
            const data = await getConsulta(idPaciente);
            setConsultas(data); // Atualiza o estado com os resultados da API
        } catch (error) {
            console.error("Erro ao buscar consultas:", error);
            // Opcional: Chamar submitErrorCallback se o useForm permitir
            submitErrorCallback(new Error("Falha na comunicação com a API"));
        }
    }
    return (
        
    <>
        <form
        className="w-full flex flex-col gap-2"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
        >
            <Input
                label='pesquisa'
                type='pesquisa'
                name='pesquisa'
                id='pesquisa'
                placeholder='digite o id do paciente'
                value={ pesquisa }
                handleChange={(_, e) => handleChange(e)}
                readOnly={loadingSubmit}
                required
            />
      
            <Button type='submit' disabled={loadingSubmit || !!errorsCount || !formRef.current}>
                {
                loadingSubmit
                    ? 'Carregando...'
                    : 'Entrar'
                }
            </Button>
    </form>
      <div>
        {consultas.length > 0 ? (
          consultas.map((c, i) => (
            
            <div key={c.id}>
              Consulta ID: {c.id} - CPF: {c.cpf}
            </div>
          ))
        ) : (
          
          <p>Nenhuma consulta encontrada ou pesquisada.</p>
        )}
      </div>
        
    </>
    )
}

export default Pacientes