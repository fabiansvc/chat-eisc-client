import { useNavigate } from "react-router-dom";
import "./stylesHome.css";

export default function Home() {
    const navigate = useNavigate();

    const onHandleLogin = () => {
        navigate("/login");
    }

    return <>
        <div className="container">
            <h1 className="text-align-center color-red"> Chat EISC </h1>
            <span className="text-align-center"> Welcome </span>
            <button onClick={onHandleLogin}>Login</button>
        </div>
    </>
}