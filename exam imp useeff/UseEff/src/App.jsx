import { useState,useEffect } from "react";

function DemoComponent() {
  useEffect(() => {

    console.log('Component mounted or updated')

    return () => {
    
      console.log('Component unmounted')
    }
  }, [])

  return (
   <h2>demo comp visible</h2>
  )
}

function App() {
  const [show,setShow] = useState(false);
  return(
    <div>
      <button onClick={() => setShow(!show)}>Toggle Demo Component</button>
      {show && <DemoComponent />}
    </div>
  );
}

export default App;
