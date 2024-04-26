import { useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext"
import "./stylesRegister.css"

export default function Register(props) {
    const {user, setUser} = useUser()
    const state = useLocation();
    const {firstTime} = state.state;

    return <>
        <div className="container">
            <h1 className="text-align-center color-red"> Register </h1> 
            <span className="text-align-center"> Please Register to continue</span>
            {firstTime && <span>Welcome PLEASE REGISTER</span>}
        </div>
    </>
}
