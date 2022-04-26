export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');


    const horasEmSegundo = Number(horas) * 3600;
    const minutosEmSegundo = Number(minutos) * 60;
    return horasEmSegundo + minutosEmSegundo + Number(segundos);
}