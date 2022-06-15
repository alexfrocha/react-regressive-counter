export function tempoParaSegundos(tempo: string) {
    let [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');
    let horasEmSegundos = Number(horas) * 3600;
    let minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}
