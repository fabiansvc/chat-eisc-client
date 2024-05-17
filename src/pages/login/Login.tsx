import React, { useRef } from "react";
import { useUser } from "../../context/UserContext.tsx";
import "./stylesLogin.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (props) => {
  const { user } = useUser();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onHandleLogin = (e) => {
    e.preventDefault();

    if (
      user.email === emailRef.current?.value &&
      user.password === passwordRef.current?.value
    ) {
        navigate("/chat");
    }
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
            <input
              ref={passwordRef}
              type="password"
              placeholder="Digite la contraseña"
            />
          </div>
          <button className="w-100" onClick={onHandleLogin}>
            Acceder
          </button>
        </form>
        <span> o Registrese </span>
        <button onClick={() => navigate("/register")}>Registrar</button>
      </div>
    </div>
  );
};

export default Login;
