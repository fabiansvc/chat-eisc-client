import React, { useRef } from "react";
import "./stylesRegister.css";
import { useUser } from "../../context/UserContext.tsx";
import { useNavigate } from "react-router-dom";

const Register: React.FC = (props) => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onHandleRegister = (e) => {
    e.preventDefault();
    setUser({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    navigate("/login");
  };

  return (
    <div className="container">
      <div className="flex flex-column justify-center align-items-center w-100 bg-white">
        <h1 className="color-red"> Registro </h1>
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
          <button className="w-100" onClick={onHandleRegister}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
