

import styles from "./page.module.css";
import ligh  from "./light.module.css";
import dark  from "./dark.module.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";


export default function Home() {
  
  return (
    <main className={ styles.container}>
     <Navigation/>
     <About/>
     <Skills/>
    </main>
  );
}
