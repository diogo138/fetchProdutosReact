import React from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  /* Carregando produto do navegador do usuário */
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal)
  }, [])
  
  /* Salvando produto no navegador do usuário */
  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto])


  /* Função para mudar o estado de produto */
  function handleClick(event) {
    setProduto(event.target.innerText); 
  }

  return (
    <div className="App">
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Notebook</button>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ marginRight: '.5rem' }} onClick={handleClick}>Tablet</button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
