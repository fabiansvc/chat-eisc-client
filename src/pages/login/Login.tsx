import React, { useRef } from "react";
import { useUser } from "../../context/UserContext.tsx";
import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (props) => {
    const { setUser } = useUser();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const onHandleLogin = () => {
        if (emailRef.current && passwordRef.current) {
            setUser({
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
        }

        navigate("/register");
    };

    return (
        <div className="container">
            <div className="flex flex-column justify-center align-items-center w-100 bg-white"> 
                <h1 className="color-red"> Inicio de sesión </h1>
                <form>
                    <div>
                        <input ref={emailRef} type="text" placeholder="Diigite el email" />
                    </div>
                    <div>
                        <input ref={passwordRef} type="password" placeholder="Digite la contraseña" />
                    </div>
                    <div className="">
                        <button className="w-100" onClick={onHandleLogin}> Acceder </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
