import React from 'react';
import Produto from './Produto';

function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    let produto = event.target.innerText
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
    const json = await response.json();
    
    setDados(json);
    setCarregando(false);
  }

  return (
    <div className="App">
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
