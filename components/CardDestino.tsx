import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  nome: string;
  imagem: string;
  descricao: string;
}

export default function CardDestino({ nome, imagem, descricao }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imagem} alt={nome} className={styles.imagem} />
      <div className={styles.conteudo}>
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}