import React, { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/date';
import Botao from '../Button';
import { ITarefa } from '../Lista';

interface Props {
    tarefaSelecionada: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({tarefaSelecionada, finalizarTarefa} : Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(tarefaSelecionada) setTempo(tempoParaSegundos(tarefaSelecionada.tempo))
    }, [tarefaSelecionada])

    let novoTempo = tempo || 0;
    let minutos = Math.floor(novoTempo / 60);
    let segundos = novoTempo % 60;
    let [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    let [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    function contagemRegressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1)
                return contagemRegressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return (
        <div className='cronometro-card'>
            <div className="cronometro-container">
                <div className="cronometro-info">
                    <span className="cronometro-number">{minutoDezena}</span>
                    <span className="cronometro-number">{minutoUnidade}</span>
                    <span className='cronometro-div'>:</span>
                    <span className="cronometro-number">{segundoDezena}</span>
                    <span className="cronometro-number">{segundoUnidade}</span>
                </div>
                <Botao onClick={() => contagemRegressiva(novoTempo)} texto='Começar' />   
            </div>
        </div>
    )
}