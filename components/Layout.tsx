import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Portal de Viagens</h1>
        <nav className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2026 Portal de Viagens</p>
      </footer>
    </div>
  );
}