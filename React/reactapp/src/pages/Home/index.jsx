import "./style.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
      <div className="container">
        <h1>Lista de presença</h1>
        <input type="text" placeholder="Digite o nome..." />
        <button>Adicionar</button>

        <Card name="Estevão" time="10:11:12" />
        <Card name="Henrique" time="13:14:15" />
      </div>
    </>
  );
}
