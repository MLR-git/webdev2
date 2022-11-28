import {NavLink, useMatch, useResolvedPath} from "react-router-dom"
import Button from 'react-bootstrap/Button';

//To change a button based on the current link, we need to match the current path name to the button's value
function NavButton(props){
    //Here, the NavButton will take props
    //"props.to" represents the path to navigate to, specified in the props when it is instatiated
    let resolved = useResolvedPath(props.to);
    //Here, the useMatch will check the specified pathname against the current URL, and evaluate to true or false
    let match = useMatch({ path: resolved.pathname, end: true });

    const buttonStyle = {
        backgroundColor: "green",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    };

    const activeButtonStyle = {
        backgroundColor: "red",
        border: "none",
        color: "black",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    };

    return (
        //What is returned is, effectively, a button which checks if the match defined above is true or false
        <NavLink to={props.to}>
            <Button variant="primary" style={match ? activeButtonStyle : buttonStyle}>
                {/* Another props is inserted here to enter a name for the label on instantiation */}
                <p>{props.label}</p>
            </Button>
        </NavLink>
    );
}

export default NavButton;
