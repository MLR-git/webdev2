import {NavLink, useMatch, useResolvedPath} from "react-router-dom"
import Button from "@mui/material/Button";

//To change a button based on the current link, we need to match the current path name to the button's value
function NavButton(props){
    //Here, the NavButton will take props
    //"props.to" represents the path to navigate to, specified in the props when it is instatiated
    let resolved = useResolvedPath(props.to);
    //Here, the useMatch will check the specified pathname against the current URL, and evaluate to true or false
    let match = useMatch({ path: resolved.pathname, end: true });

    const buttonStyle = {
        backgroundColor: "SlateGrey ",
        border: "1px solid cyan",
        color: "white",
        paddingTop: "20px",
        paddingLeft: "15px",
        paddingRight: "15px",
        margin: "10px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "18px",
        fontFamily: "Lucida Console",
        verticalAlign: "middle",
    };

    const activeButtonStyle = {
        backgroundColor: "PowderBlue",
        border: "1px solid cyan",
        color: "black",
        paddingTop: "20px",
        paddingLeft: "15px",
        paddingRight: "15px",
        margin: "10px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "18px",
        fontFamily: "Lucida Console",
        fontWeight: "bold",
    };

    return (
        //What is returned is, effectively, a button which checks if the match defined above is true or false
        <NavLink to={props.to}>
            <Button variant="contained" style={match ? activeButtonStyle : buttonStyle}>
                <p>{props.label}</p>
            </Button>
        </NavLink>
    );
}

export default NavButton;
