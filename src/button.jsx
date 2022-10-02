import {

    useNavigate,

    
  } from "react-router-dom";

export const StartButton = () => {
    const route = useNavigate()
    return (
        <button onClick={event => route({pathname: '/quiz'})}  className="initial-button"><p>Start your Spacial Journey!</p></button>
    )
}