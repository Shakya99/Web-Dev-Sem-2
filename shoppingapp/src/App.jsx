import './App.css'
import InputBox from './components/inputbox';
import Shopping from './components/shopping';



function App() {
  const handleCheckout = () => {
    alert("Proceeding to checkout! Thank you for your purchase.");
  };

  return (
    <div className="app-container">
      <h1>Shopping App</h1>
      <InputBox />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button 
          onClick={handleCheckout}
          style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Checkout
        </button>
        <Shopping />
      </div>
    </div>
  )
}

export default App
