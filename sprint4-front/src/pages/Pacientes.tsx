import { useState, useRef } from "react";
import Input from "../componentes/input";
import Button from "../componentes/button";
import useForm from "../hooks/use-form";
import type { FormState } from "../hooks/use-form";

interface Consulta {
  id: number;
  cpfPaciente: string;
  dataHora: string;
}

function Pacientes() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [resultado, setResultado] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);
  const addFormRef = useRef<HTMLFormElement>(null);

  const initialSearchForm = { pesquisa: "" };
  const initialAddForm = { cpfPaciente: "", dataHora: "" };

  const {
    data: { pesquisa },
    loadingSubmit,
    handleChange,
    handleSubmit,
    errorsCount,
  } = useForm(formRef, initialSearchForm, submitCallback, submitErrorCallback);

  const {
    data: { cpfPaciente, dataHora },
    loadingSubmit: loadingAdd,
    handleChange: handleAddChange,
    handleSubmit: handleAddSubmit,
    errorsCount: addErrorsCount,
  } = useForm(addFormRef, initialAddForm, addConsultaCallback, submitErrorCallback);

  async function getConsulta(idConsulta: number): Promise<Consulta[]> {

    const url = `https://preztech-561497.onrender.com/consultas/paciente/${idConsulta}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });


    if (!response.ok) throw new Error("Consulta não encontrada");

    const data = await response.json();

    const consultasArray = Array.isArray(data) ? data : [data];

    return consultasArray.map((item) => ({
      id: item.idConsulta ?? item.id,
      cpfPaciente: item.cpfPaciente,
      dataHora: item.dataHora,
    }));
  }

  async function deleteConsulta(idConsulta: number) {
    if (!window.confirm(`Tem certeza que deseja apagar a consulta ID ${idConsulta}?`)) return;

    try {

      const url = `https://preztech-561497.onrender.com/consultas/${idConsulta}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });



      if (response.status === 204) {
        setConsultas((prev) => prev.filter((c) => c.id !== idConsulta));
        alert("Consulta excluída com sucesso!");
      } else if (response.status === 404) {
        alert("Consulta não encontrada.");
      } else {
        alert("Erro ao apagar a consulta.");
      }
    } catch (error) {
      console.error("Erro ao excluir consulta:", error);
      alert("Falha ao apagar a consulta.");
    }
  }

  // ➕ Adicionar nova consulta
  async function addConsultaCallback(values: FormState) {
    const { cpfPaciente, dataHora } = values;


    if (!cpfPaciente || !dataHora) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const dataFormatada = new Date(dataHora).toISOString();

      const url = "https://preztech-561497.onrender.com/consultas";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpfPaciente, dataHora: dataFormatada }),
      });


      if (!response.ok) {
        const text = await response.text();
        console.error("⚠️ Erro API:", text);
        throw new Error("Erro ao criar consulta");
      }

      alert("Consulta adicionada com sucesso!");
      (addFormRef.current as HTMLFormElement).reset();
    } catch (error) {
      console.error("Erro ao adicionar consulta:", error);
      alert("Falha ao adicionar consulta.");
    }
  }

  // ✏️ Atualizar consulta existente
  async function updateConsulta(idConsulta: number, novaData: string, cpfPaciente: string) {

    if (!novaData) {
      alert("Por favor, insira uma nova data e hora.");
      return;
    }

    try {
      const dataISO = new Date(novaData).toISOString();
      const url = `https://preztech-561497.onrender.com/consultas/${idConsulta}`;


      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpfPaciente, dataHora: dataISO }),
      });



      if (response.ok) {
        alert("Consulta atualizada com sucesso!");
        setConsultas((prev) =>
          prev.map((c) =>
            c.id === idConsulta ? { ...c, dataHora: novaData } : c
          )
        );
      } else {
        const text = await response.text();
        console.error("⚠️ Erro PUT API:", text);
        alert("Falha ao atualizar consulta.");
      }
    } catch (error) {
      console.error("Erro ao atualizar consulta:", error);
      alert("Erro ao atualizar consulta.");
    }
  }


  async function submitErrorCallback(error: Error) {
    console.error("Erro de submissão:", error);
    window.alert(error.message || "Ocorreu um erro inesperado.");
  }


  async function submitCallback(values: FormState) {
    const idPaciente = Number(values.pesquisa);


    if (isNaN(idPaciente) || idPaciente <= 0) {
      setResultado("Por favor, insira um ID válido.");
      setConsultas([]);
      return;
    }

    try {
      const data = await getConsulta(idPaciente);
      setConsultas(data);
      setResultado(data.length ? "" : "Nenhuma consulta encontrada.");
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
      setConsultas([]);
      setResultado("Falha na comunicação com a API ou paciente não encontrado.");
    }
  }

  return (
    <div className="p-6 space-y-6 w-screen h-[53.5rem]">

      <form
        className="flex flex-col gap-3 p-4 border rounded-xl shadow-sm bg-white"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
      >
        <h2 className="text-lg font-semibold text-black">Pesquisar Consultas</h2>
        <Input
          label="ID do Paciente"
          type="text"
          name="pesquisa"
          id="pesquisa"
          placeholder="Digite o ID do paciente"
          value={pesquisa}
          handleChange={(_, e) => handleChange(e)}
          readOnly={loadingSubmit}
          required
        />

        <Button type="submit" disabled={loadingSubmit || !!errorsCount}>
          {loadingSubmit ? "Carregando..." : "Pesquisar"}
        </Button>
      </form>

      <form
        className="flex flex-col gap-3 p-4 border rounded-xl shadow-sm bg-white"
        onSubmit={handleAddSubmit}
        ref={addFormRef}
        noValidate
      >
        <h2 className="text-lg font-semibold text-black">Adicionar Consulta</h2>

        <Input
          label="CPF do Paciente"
          type="text"
          name="cpfPaciente"
          id="cpfPaciente"
          placeholder="Digite o CPF do paciente"
          value={cpfPaciente}
          handleChange={(_, e) => {
            if (e.target.value.length <= 11) handleAddChange(e);
          }}
          readOnly={loadingAdd}
          required
        />

        <Input
          label="Data e Hora"
          type="datetime-local"
          name="dataHora"
          id="dataHora"
          value={dataHora}
          handleChange={(_, e) => handleAddChange(e)}
          readOnly={loadingAdd}
          required
        />

        <Button type="submit" disabled={loadingAdd || !!addErrorsCount}>
          {loadingAdd ? "Enviando..." : "Adicionar"}
        </Button>
      </form>

      <div className="p-4 border rounded-xl bg-white shadow-sm">
        <h2 className="text-lg text-black font-semibold mb-3">Consultas</h2>

        {consultas.length > 0 ? (
          consultas.map((c) => (
            <div key={c.id} className="border-b border-gray-300 py-3">
              <p className="text-black">
                <strong>ID:</strong> {c.id}
              </p>
              <p className="text-black">
                <strong>CPF:</strong> {c.cpfPaciente}
              </p>
              <p className="text-black">
                <strong>Data/Hora:</strong> {new Date(c.dataHora).toLocaleString("pt-BR")}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="datetime-local"
                  className="border rounded p-1 text-black"
                  value={c.dataHora.split(".")[0]} 
                  onChange={(e) =>
                    setConsultas((prev) =>
                      prev.map((item) =>
                        item.id === c.id
                          ? { ...item, dataHora: e.target.value }
                          : item
                      )
                    )
                  }
                />
                <button
                  type="button"
                  onClick={() => updateConsulta(c.id, c.dataHora, c.cpfPaciente)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Atualizar
                </button>
                <button
                  type="button"
                  onClick={() => deleteConsulta(c.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Apagar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-black">
            {resultado || "Nenhuma consulta listada."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Pacientes;
