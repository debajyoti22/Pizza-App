import styles from "../styles/Pizza.module.css"
import PizzaCard from "./PizzaCard"
const Pizza = () => {
    return(
      
       <div className={styles.container} id="pizza">
       <h1 className={styles.title}>PIZZERIA !</h1>
       <p className={styles.desc}>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
            
       <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
       </div>  

    
       </div>
    )
   }
   export default Pizza