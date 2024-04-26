import { useRef } from "react";
import { useUser } from "../../context/UserContext";
import "./stylesLogin.css"
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const {setUser} = useUser();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const onHandleLogin = () => {
        setUser({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        navigate("/register", {
            state: {firstTime: false}
        })
    }   
    return <>
        <div className="container">
            <h1 className="color-red text-align-center"> Login </h1> 
            <span className="text-align-center"> Please login to continue</span>
            <form>
                <input ref={emailRef} type="text" placeholder="Diigite el email"/>
                <input ref={passwordRef} type="text" placeholder="Digite la cotraseña"/>
                <button onClick={onHandleLogin}> Login </button>
            </form>
        </div>
    </>
}