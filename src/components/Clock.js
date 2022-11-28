import {React, useState, useEffect} from "react";

/*The duplication of the component definition and React.useEffect below are used for
  separation of concerns. Now, the clock element can be returned in the display without
  requiring any external parameters.
*/
export function Clock(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString(), 1000)
        );
        return () => {
            clearInterval(interval);
        };
    }, [time]);
    return <p>React Clock: {time} </p>;
}

export default Clock;