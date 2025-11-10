import backgroundImage from '../img/pexels-olly-3791664 1.png';
import Linha1 from '../img/Group 23.png';
import Linha2 from '../img/Group 22.png';
import Icon1 from '../img/Profile-Lightbulb.png';
import Icon2 from '../img/Group-1.png';
import Ellipse from '../img/Ellipse 1.png';


function Home() {
    return (
        <>
            <section className=" h-[53.5rem] w-screen flex justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="flex flex-col justify-center items-center text-center gap-5 animate-title max-w-[400px] sm:max-w-5xl ">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-white ">Conheça a Preztach</h1>
                    <h4 className="text-3xl text-center md:text-4xl sm:max-w-xl text-text-white ">Onde Facilitamos a Tecnologia, para Ampliar Horizontes</h4>
                </div>
            </section>






            <section className='min-h-screen bg-text-text-white flex flex-col justify-center items-center gap-50 flex-wrap'>
                <img src={Linha1} className='self-start !justify-self-start !items-start py-10 w-lg lg:p-0 lg:size-auto' alt="LInha 1" />
                <div className='flex justify-center md:flex-none flex-row gap-35 md:gap-50 flex-wrap'>
                    <div className='max-w-[380px] md:max-w-[480px] min-h-[144px]  flex flex-row items-center text-text'>
                        <img src={Icon1} className='w-15 h-15 mr-5' alt="Icone Missão" />
                        <div className='flex flex-col text-justify gap-2'>
                            <h4 className='font-bold text-2xl sm:text-4xl '>Nossa missão</h4>
                            <p className='text-xl sm:text-2xl'>A Preztech procura, por meio da tecnologia simples e intuitiva, ensinar aqueles que não conhecem o meio a usá-lo sem medo ou dificuldades.
                            </p>
                        </div>
                    </div>
                    <div className='max-w-[380px] md:max-w-[480px] min-h-[144px] flex flex-row items-center text-text'>
                        <img src={Icon2} className='w-15 h-15 mr-5' alt="Icone Para Quem" />
                        <div className='flex flex-col text-justify gap-2'>
                            <h4 className='font-bold text-2xl sm:text-4xl'>Para quem?</h4>
                            <p className='text-xl sm:text-2xl' >Idosos, PCDs, analfabetos funcionais e outras pessoas que não conseguem acompanhar a tecnologia e suas atualizações constantes.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={Linha2} className='self-end !justify-self-end !items-end py-10 w-lg lg:p-0 lg:size-auto' alt="Linha 2" />
            </section>





            <section className='min-h-screen bg-bg flex justify-evenly items-center flex-wrap'>
                <div className='text-text-white w-[680px] flex flex-col text-justify gap-8 p-10 md:p-0'>
                <h1 className='text-3xl sm:text-7xl font-bold'>Nossa parceria</h1>
                <p className='text-xl sm:text-3xl'>No início de 2025, foi proposta uma parceria da Startup com o HC (Hospital das Clínicas) em busca de reduzir as taxas de absenteísmo nas consultas. Para isso, com a ajuda da instituição de ensino FIAP, nós trabalhamos na solução pensada não somente para esse público, mas nós também visualizamos o problema em todas as suas dimensões para poder ajudar outras empresas futuramente, considerando que esse problema acontece com frequência pelo mesmo fator, que é a falta de conhecimento e educação digital.</p>
                <p  className='text-xl sm:text-3xl font-bold'>
                Explore nosso site e confira mais informações sobre o projeto!
                </p>
                </div>
                <img src={Ellipse} className='w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] p-10 md:p-0' alt="Image Hospital das Clinicas" />
            </section>

        </>
    );
}

export default Home;
