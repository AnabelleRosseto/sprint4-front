import { useNavigate } from "react-router";
import useForm from "../hooks/use-form";
import type { FormState } from "../hooks/use-form";
import { useRef } from "react";

import Input from "../componentes/input";
import Button from "../componentes/button";

function Login() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const initialLoginForm = {
    user: "",
    password: ""
  };

  const {
    data: { user, password },
    loadingSubmit,
    handleChange,
    handleSubmit,
    errorsCount
  } = useForm(formRef, initialLoginForm, submitCallback, submitErrorCallback);

  async function submitErrorCallback(error: Error) {
    if (error.cause && Object.keys(error.cause).length) {
      let message = "Erro ao realizar login:\n\n";

      for (const key in error.cause) {
        const causes = error.cause as { [key: string]: string[] };
        message += `- ${causes[key]}\n`;
      }

      return window.alert(message);
    }

    return window.alert(error.message);
  }

  async function submitCallback(values: FormState) {
    try {

      // Login fixo de exemplo
      if (values.user === "hospclin" && values.password === "314159") {
        const token = "loggedin";
        localStorage.setItem("token", token);
        navigate("/pacientes");
      } else {
        throw new Error("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("❌ Erro no login:", error);
      if (error instanceof Error) {
        return submitErrorCallback(error);
      }
      return submitErrorCallback(
        new Error("Erro desconhecido ao tentar logar.", { cause: error })
      );
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-[53.5rem] bg-gray-100">
      <form
        className="bg-white shadow-md rounded-2xl p-8 w-[90%] max-w-md border border-gray-300"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login PrezTech
        </h1>

        <label htmlFor="user" className="text-gray-700 mb-1">
          ID Preztech
        </label>
        <Input
          label="E-mail"
          type="text"
          name="user"
          id="user"
          placeholder="hospclin"
          value={user}
          handleChange={(_, e) => handleChange(e)}
          readOnly={loadingSubmit}
          required
        />

        <label htmlFor="password" className="text-gray-700 mt-4 mb-1">
          Senha
        </label>
        <Input
          label="Senha"
          type="password"
          name="password"
          id="password"
          placeholder="314159"
          value={password}
          handleChange={(_, e) => handleChange(e)}
          readOnly={loadingSubmit}
          required
        />

        <Button
          type="submit"
          disabled={loadingSubmit || !!errorsCount || !formRef.current}
          className="mt-6"
        >
          {loadingSubmit ? "Carregando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
