import { useRef } from "react";
import { useUser } from "../../context/UserContext";
import "./stylesLogin.css"
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const { setUser } = useUser();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const onHandleLogin = () => {
        setUser({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        navigate("/register")
    }

    return <>
        <div className="container">
            <div className="flex flex-column justify-center align-items-center w-100 bg-white"> 
                <h1 className="color-red"> Inicio de sesión </h1>
                <form className="">
                    <div>
                        <input ref={emailRef} type="text" placeholder="Diigite el email" />
                    </div>
                    <div>
                        <input ref={passwordRef} type="text" placeholder="Digite la cotraseña" />
                    </div>
                    <div className="">
                        <button className="w-100" onClick={onHandleLogin}> Acceder </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}