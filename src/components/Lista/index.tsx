import React, { useState } from 'react';

export interface ITarefa {
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({tarefas, selecionaTarefa} : Props) {
    return (
        <aside className='lista'>
            <h2 className='lista-title'>
                    Estudos do dia
            </h2>
            <div className='lista-lista'>
                {tarefas.map((item, index) => {
                    
                    return (
                        <li key={item["id"]} onClick={() => 
                            !item.completado && selecionaTarefa({...item})
                        } className={`tarefa-card ${item.completado ? 'tarefa-completada' : ''} ${item.selecionado && !item.completado ? 'tarefa-selecionado' : ''}`}>
                            <span className='tarefa-nome'> {item["tarefa"]} </span>
                            <span className='tarefa-tempo'> {item["tempo"]} </span>
                            {item.completado ? <span>Tarefa completada</span> : ''}
                        </li>
                    )
                })}
            </div>
        </aside>
    )
}

export default Lista;