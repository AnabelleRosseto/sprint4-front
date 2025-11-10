function FAQ() {
  return (
    <>
      <section className=" h-[53.5rem] flex flex-col w-screen justify-center items-center">
        <h1 className="text-3xl text-text ">Dúvidas Frequentes</h1>
        <div className="lg:ml-50 self-start mt-30 flex flex-col  text-text !justify-self-start !items-start gap-10">
            <div className="p-4 cursor-pointer">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Onde vou poder encontrar a solução?
              </h1>
              <h4  className="text-xl lg:text-2xl text-text/65">
                No próprio aplicativo do Hospital das Clínicas.
              </h4>
            </div>
            <div className="p-4 cursor-pointer">
              <h1 className="text-2xl lg:text-3xl font-semibold">
              É certa a implementação da solução?
              </h1>
              <h4  className="text-xl lg:text-2xl  text-text/65">
                Ainda não é certa, dada que ainda é um protótipo para a parceria proposta.
              </h4>
            </div>
            <div className="p-4 cursor-pointer">
              <h1 className="text-2xl lg:text-3xl font-semibold">
              A solução será aplicada em outras parcerias?
              </h1>
              <h4 className="text-xl lg:text-2xl  text-text/65">
                Por enquanto, não, mas futuramente é incerto.
              </h4>
            </div>
        </div>
      </section>

    </>
  )
  
}

export default FAQ