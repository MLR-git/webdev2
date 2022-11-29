import { Toggle } from "./Toggle";

/* By using another function here, we can change components without
   doing everything in the main app component. Because this component is
   rendering a button, we can add it to the main.
   This illustrates that props will automatically interpret the parameters specified in the
   React element of the main function component
*/
export function UserActions(props) {
    const handleOnClick = () => {
        props.setColor(Toggle(props.color));
        props.setCount(props.count + 1);
    };
    //Preferable to define the function outside of the element as shown here
    return  <div style={{ width: "100%", textAlign: "center"}}>
                <button onClick={handleOnClick}>
                    Click me React
                    </button>
            </div>;
}

export default UserActions;