import { useNavigate } from "react-router-dom";
import "./stylesHome.css";

export default function Home() {
    const navigate = useNavigate();

    const onHandleChat = () => {
        navigate("/login");
    }

    return <>
        <div className="container">
            <div className="flex flex-column justify-center align-items-center w-100 bg-white">
                <h1 className="color-red"> Chat EISC </h1>
                <h2 className=""> Bienvenido </h2>
                <div className="">
                    <button onClick={onHandleChat}>Chatear</button>
                </div>
            </div>
            
        </div>
    </>
}