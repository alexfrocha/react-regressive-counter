import React, { useState } from 'react';
import Card from '../components/Card';
import Lista, { ITarefa } from '../components/Lista';

function App() {

  
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => tarefasAntigas.map(item => ({
      ...item,
      selecionado: item.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() { 
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAntigas => tarefasAntigas.map(element => {
        if(element.id === selecionado.id) {
          return {
            ...element,
            selecionado: false,
            completado: true
          }
        }
        return element
      }))
    }
  }

  return (
    <div className="App">
      <Card setTarefas={setTarefas} tarefaSelecionada={selecionado} finalizarTarefa={finalizarTarefa} />
      <Lista
        selecionaTarefa={selecionaTarefa}
        tarefas={tarefas}
      />
    </div>
  );
}

export default App;
