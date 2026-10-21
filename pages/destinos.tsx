import CardDestino from "../components/CardDestino";
import { destinos } from "../data/destinos";
import styles from "./destinos.module.css";

export default function Destinos() {
  return (
    <>
      <h2 className={styles.titulo}>Nossos destinos</h2>
      <div className={styles.grid}>
        {destinos.map((d) => (
          <CardDestino key={d.id} nome={d.nome} imagem={d.imagem} descricao={d.descricao} />
        ))}
      </div>
    </>
  );
}