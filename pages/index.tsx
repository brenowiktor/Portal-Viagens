import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h2>Descubra o mundo</h2>
      <p>Explore destinos incríveis e planeje sua próxima viagem.</p>
      <Link href="/destinos" className={styles.botao}>Ver destinos</Link>
    </section>
  );
}
