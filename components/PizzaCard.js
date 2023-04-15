import Image from "next/image";
import styles from "../styles/PizzaCard.module.css"
const PizzaCard = () => {
    return(
      <div className={styles.container}>
         <Image src="/img/pizza.png" alt="" width="300" height="300" />

         <h1 className={styles.title}>MARGHERITA PIZZA</h1>
         <span className={styles.price}>₹150</span>
         
         <p className={styles.desc}>
         Classic delight with 100% real mozzarella cheese.
         </p>
    </div>
    )
   }
   export default PizzaCard