import React, { useState } from "react";

const Mario = () => {
    const [count, setCount] = useState(0);
    return (
       <>
       <button onClick={() => setCount(count + 1)}>Click me</button>
       <p>You clicked {count} times</p>
       </>
    )
}

export default Mario;