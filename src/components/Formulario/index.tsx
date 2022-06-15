import React from 'react';
import Botao from '../Button';
import Button from '../Button';
const {v4} = require('uuid')

class Formulario extends React.Component<{
    
    
    setTarefas: React.Dispatch<React.SetStateAction<{
        tarefa: string,
        tempo: string,
        selecionado: boolean,
        completado: boolean,
        id: string
    }[]>>}
    
    > {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }
    adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: v4() 
            }])
        this.setState({tarefa: '', tempo: "00:00:00"})
    }
    render() {
        return (
            <form action='#' onSubmit={this.adicionarTarefa.bind(this)} className='form'>
                <div className="input-group">
                    <div className='form-group'>
                        <label htmlFor="tarefa">Tarefa</label>
                        <input
                            className='form-control'
                            type="text"
                            placeholder='O que você quer estudar?'
                            value={this.state.tarefa}
                            onChange={e => this.setState({...this.state, tarefa: e.target.value})}
                            id='tarefa'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="time">Tempo</label>
                        <input
                            className='form-control-time'
                            type="time"
                            step="1"
                            name="time"
                            id="time"
                            value={this.state.tempo}
                            onChange={e => this.setState({...this.state, tempo: e.target.value})}
                            min="00:00:01"
                            max="01:30:00"
                            required
                        />
                    </div>
                </div>
                <Botao type="submit" texto='Adicionar' />
            </form>
        )
    }
}

export default Formulario;