import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import { ITarefa } from "../Lista";

export default function Card({setTarefas, finalizarTarefa, tarefaSelecionada}: {
    tarefaSelecionada: ITarefa | undefined,
    finalizarTarefa: () => void,
    setTarefas: React.Dispatch<React.SetStateAction<{
        tarefa: string,
        tempo: string,
        selecionado: boolean,
        completado: boolean,
        id: string
    }[]>>,
}) {
    return (
        <div className="card">
            <Formulario setTarefas={setTarefas} />
            <Cronometro finalizarTarefa={finalizarTarefa} tarefaSelecionada={tarefaSelecionada}/>
        </div>
    )
}