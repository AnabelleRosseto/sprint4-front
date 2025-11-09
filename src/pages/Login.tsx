import {useNavigate } from "react-router";
import useForm from "../hooks/use-form"
import type { FormState } from '../hooks/use-form'
import { useRef } from 'react'

import Input from "../componentes/input";
import Button from "../componentes/button";

function Login() {

    let navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null) as React.RefObject<HTMLFormElement>

    const initialLoginForm = {
        email: '',
        password: ''
    }
    const {
        data: {
        user,
        password
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
      let message = 'Erro ao realizar login:\n\n'

      for (const key in error.cause) {
        const causes = error.cause as { [key: string]: string[]}
        message += `- ${causes[key]}\n`
      }

      return window.alert(message)
    }

    return window.alert(error.message)
  }

  async function submitCallback(values: FormState) {
    try {
      let token: string = "";
      if( user != "hospclin" && password != "314159")
      {token = "loggedin"}
      
      if (token == "") { 
        throw new Error("Usuario ou Senha errados")
      }

     localStorage.setItem('token', token)
     navigate('/pacientes')

    } catch (error) {
      if (error instanceof Error) {
        return submitErrorCallback(error)
      }
      return submitErrorCallback(new Error('Erro desconhecido ao tentar logar.', { cause: error }))
    }
  }

    return (
        <>
        <div>
            <div className="justify-items-center">
                <form 
                    className=" m-10 rounded p-5 bg-white border-2 border-neutral-400 flex flex-col max-w-3/4 md:max-w-1/2"
                    onSubmit={handleSubmit}
                    ref={formRef}
                    noValidate
                >
                    <label htmlFor="user">ID Preztech</label>
                    <Input
                        label='E-mail'
                        type='text'
                        name='user'
                        id='user'
                        placeholder='hospclin'
                        value={user}
                        handleChange={(_, e) => handleChange(e)}
                        readOnly={loadingSubmit}
                        required
                    />
                    <label htmlFor="password">Senha</label>
                    <Input
                        label='Senha'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='314159'
                        disabled={false}
                        minLength={6}
                        value={password}
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
            </div>
        </div>
        </>
    )
}

export default Login;