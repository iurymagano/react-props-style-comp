import * as C from './AppStyles';


const App = () => {
  return (
    <C.Container bgColor='#00003D'>
      <C.Botao bg='#FF0000'>Botão Grande</C.Botao>
      <C.Botao bg='#00FF00' small>Botão Pequeno</C.Botao>

    </C.Container>
  );
}

export default App;