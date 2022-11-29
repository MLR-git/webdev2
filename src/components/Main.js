import {React, useState, useEffect} from "react";
import DisplayMessage from "./DisplayMessage";
import Clock from "./Clock";
import CounterDisplay from "./CounterDisplay";
import UserActions from "./UserActions";

function Main() {
    const [color, setColor] = useState(
      JSON.parse(sessionStorage.getItem("color")) || "blue"
    );
    const [count, setCount] = useState(
      JSON.parse(localStorage.getItem("count")) || 0
    );
  
    useEffect(() => {
      sessionStorage.setItem("color", JSON.stringify(color));
      localStorage.setItem("count", JSON.stringify(count));
    }, [color, count]);
    return (
      <div>
        <div>
          <table style={{width:"100%"}}>
            <tr>
              <td style={{width: "100%" }}>
                <DisplayMessage color={color}/>
              </td>
            </tr>
            <tr>
            <td style={{textAlign: "center", width: "100%"}}>
                <Clock />
              </td>
            </tr>
          </table>
        </div>
        <div>
          <CounterDisplay count={count} />
          {/* The UserActions component takes the following props as inputs*/}
          <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
        </div>
      </div>
    );
  }
  
  export default Main;
  