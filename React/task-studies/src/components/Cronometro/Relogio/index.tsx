import style from "./Relogio.module.scss";

interface Props{
    tempo: number | undefined;
}

export default function Relogio({tempo = 0}: Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezenas, minutoUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezenas, segundoUniade] = String(segundos).padStart(2,'0');
    return(
        <>
            <span className={style.relogioNumero}>{minutoDezenas}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezenas}</span>
            <span className={style.relogioNumero}>{segundoUniade}</span>
        </>
    )
}