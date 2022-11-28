import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

//Notes about this page:
/*
    1. useNavigate() is a hook that can be used in functional components to redirect users, like a <Navigate> element
    2. Flexbox styling is used here, which I don't understand yet.
*/

export function HomeButton(){
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        try {
            navigate("/", {replace: true});
        }
        catch (error) {
            console.log(error);
        }
    };

    return(
        <div style={{ flexDirection: "row", direction: "rtl"}}>
            <Button variant="contained" onClick={handleSubmit}>Home</Button>
        </div>
    );
}

export default HomeButton;