import backgroundImage2 from '../img/Group 28.png';
import img1 from '../img/Rectangle 15.png';
import img2 from '../img/Rectangle 16.png';
import img3 from '../img/Rectangle 17.png';

function Solucoes() {
    return (
        <>
            <section className=" h-[53.5rem] flex justify-start items-center"
                style={{
                    backgroundImage: `url(${backgroundImage2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>

                <h1 className="text-4xl md:text-6xl font-bold text-text-white w-xl pl-25 animate-title">Entenda mais sobre nosso projeto</h1>
            </section>

            <section className='min-h-screen bg-text-white flex flex-col content-center text-justify flex-wrap lg:p-25 gap-10 '>
                    <div className='flex flex-row justify-center md:justify-between mt-5 items-center w-sm sm:w-lg  md:w-2xl lg:w-5xl xl:w-auto flex-wrap xl:flex-nowrap '>
                        <div className=' flex flex-col gap-10 w-6xl'>
                    <h4 className='text-3xl lg:text-6xl  font-bold text-text'>Problematização</h4>
                <p className='text-xl lg:text-2xl leading-13'>Na parceria com o HC, obtivemos a informação de que há cerca de 20% de faltas nas consultas digitais. Isso ocorre por causa do “Absenteísmo digital”, que refere-se à ausência ou falta de acesso e utilização adequada das tecnologias digitais, que ocorre tanto por fatores econômicos, como o alto custo de serviço de internet, a falta de condições para comprar um aparelho eletrônico, ou para comprar um novo que tenha o devido suporte para certas funções; assim como fatores etários. Hoje em dia nascemos com uma maior possibilidade de imersão digital, diferente das gerações passadas que não tiveram essa oportunidade e por isso podem ter dificuldades em certos recursos.</p>
                <p className='text-xl lg:text-2xl leading-13'>De acordo com um Índice de Privação On-Line feito pela PwC, 33,9 milhões de brasileiros não estão conectados à internet, sendo a maioria deles homens, idosos, não alfabetizados e das classes C, D e E.
Além disso, somente 20% da população brasileira que usa a internet têm acesso de qualidade à rede.</p>
                </div>
                </div>
                    
                    <div className='flex flex-row justify-center md:justify-between mt-20 items-center w-sm sm:w-lg  md:w-2xl lg:w-5xl xl:w-auto flex-wrap xl:flex-nowrap '>
                        <div className=' flex flex-col gap-10 w-6xl'>
                <h4 className='text-3xl lg:text-6xl  font-bold text-text'>Nossa solução</h4>
                <p className='text-xl lg:text-2xl leading-13'>Focando em um design intuitivo e que muitos já estão familiarizados, inclusive o público sênior, propomos uma solução simples, que agrupa todos os chats usados pelo usuário em diferentes plataformas (como o Whatsapp e o email, usados pelo HC) para diferentes funções, em uma única página de chat, separando suas funções por contato e facilitando o acesso à essas informações, incluindo um novo ChatBot automatizado e os tutoriais para uso do app e para todo o processo de consulta.</p>

                <p className='text-xl lg:text-2xl leading-13'>Nesse processo, o usuário deverá clicar no ícone de chat que vai estar no canto inferior direito da tela, revelando uma página com chats separados para: código de consulta, vídeos tutoriais (de uso e funções do app), suporte automatizado pela Preztech, e outros chats futuros caso sejam necessários.</p>

                <p className='text-xl lg:text-2xl leading-13'>No processo atual, sem a aplicação a solução Preztech, o usuário recebe vídeos tutoriais por emails, e códigos de consulta por WhatsApp. Essa falta de agrupamento de informações pode dificultar o processo e exploração do usuário na plataforma.</p>
                 <p className='text-xl lg:text-2xl leading-13'>Também há a pretensão de incluir posteriormente leitura por voz e tradução para libras; além de tour guiado com Blocking Modal Walkthrough, que são curtas animações que indicam o que deve ser feito, e só desaparecem da tela após a conclusão da etapa.
</p>
                  <p className='text-xl lg:text-2xl leading-13'>Outra necessidade notada foi a de ajuste de câmera e áudio antes da consulta, para evitar o consumo do tempo de forma não produtiva, sendo resolvido com uma tela de preparo, assim como em plataformas de reuniões online, que permite que o usuário confira suas configurações (como microfone e câmera conectados, posicionamento da câmera) antes de entrar na reunião. Essa configuração seria acompanhada da indicação de entrar na reunião 10 minutos antes, dando o tempo necessário para todos os ajustes e evitando atrasos.</p>
                
                        </div>
                        <div className=' flex flex-col ml-10 gap-5 p-10 sm:p-0'>
                    <img src={img1} className='w-[284px] h-[218px]' alt="Prototipo 1" />
                    <img src={img2} className='w-[284px] h-[218px]' alt="Prototipo 2" />
                    <img src={img3} className='w-[284px] h-[218px]' alt="Prototipo 3" />
                    <p>Protótipo das páginas de chats.</p>
                    </div>
                    </div>
            </section>
        </>
    );
}
export default Solucoes