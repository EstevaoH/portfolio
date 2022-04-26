import React, { useState } from "react";
import { ITarefa } from "../../Types/tarefa";
import Botao from "../Botao";
import style from  "./Formulario.module.scss";
import {v4 as uuidv4} from "uuid";


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>

}

function Formulario({setTarefas}: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefa("");
        setTempo("00:00")
        setTarefas(tarefasAntigas => 
            [
             ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]
        );
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você quer estudar"
                required
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                value={tempo}
                onChange={evento => setTarefa(evento.target.value)}
                type="time"
                step="1"
                id="tempo"
                name="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>
            <Botao type="submit">
                Adicinar
            </Botao>
        </form>
    )
}
export default Formulario;