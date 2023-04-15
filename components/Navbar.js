import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Pizza from "./Pizza";

const Navbar = () => {
 return(
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
            <Image src="/img/telephone.png" alt="" width="32" height="32"/>
            </div>
            <div className={styles.texts}>
                <div className={styles.texts}>ORDER NOW!!</div>
                <div className={styles.texts}>777-666-555 </div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}><a href="/">Homepage</a></li>
                <li className={styles.listItem}><a href="/product/123">Products</a></li>
                <li className={styles.listItem}><a href="#pizza">Menu</a></li>
                <a href="/"><Image src="/img/logo.png" alt="" width="70" height="70"/></a>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Contact</li>
                <li className={styles.listItem}>Gallery</li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30" height="30"/>
                <div className={styles.counter}>2</div>
            </div>
        </div>

    </div>
 )
}
export default Navbar
