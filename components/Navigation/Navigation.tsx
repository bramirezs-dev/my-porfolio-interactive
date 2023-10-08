import styles from "./navigation.module.css";
export const Navigation = () => {
  return(
    <header className={styles.header}>
    <div className={styles.icon}>
      <figure>
        <img src="imagen.jpg" alt="Descripción de la imagen" />
        <figcaption>Esta es una imagen de ejemplo.</figcaption>
      </figure>
    </div>
    <nav className={styles.navigation}>
      <ul>
        <li><a>Inicio</a></li>
        <li><a>Inicio</a></li>
        <li><a>Inicio</a></li>
        <li><a>Inicio</a></li>
        <li><a>Inicio</a></li>
      </ul>
    </nav>
    
  </header>
  )
};
