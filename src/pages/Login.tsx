import { useNavigate } from "react-router";

type LoginFormData = {
    user: string,
    password: string
}

function Login() {

    const navigate = useNavigate()
    const password = '314159'
    function submit(user:string, pw:string){
        if (user ==="hospclin" && pw !== password){
            navigate("/pacientes")
        }
    }

    return (
        <>
        <div>
            <div className="justify-items-center">
                <form className=" m-10 rounded p-5 bg-white border-2 border-neutral-400 flex flex-col max-w-3/4 md:max-w-1/2">
                    <label htmlFor="user">ID Preztech</label>
                    <input 
                        type="text" 
                        id="user" 
                        name="user"
                        placeholder="hospclin"
                        className="border-2 border-neutral-500 rounded"
                    />
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        name="pw" 
                        id="pw" 
                        placeholder="314159"
                        className="border-2 border-neutral-500 rounded"
                    />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;