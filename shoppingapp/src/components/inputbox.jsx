import React from 'react'

const inputbox = () => {
  const[inputText, setInputText] = useState("");

  const handleChange = (e)=>{
    setInputText(e.target.value);
  }
  const handleClick = () =>{
    alert(inputText);
  }
  return (
   <>
   <input type="text" n
    placeholder="type"
    value={inputText} 
    onChange={e => setInputText(e.target.value)} />
   <button onClick={handleClick}>Submit</button>
   </>
  )
}

export default inputbox

