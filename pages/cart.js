import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
        <tbody>
        <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr className={styles.trData}>
          <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza3.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td className={styles.data}>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td className={styles.data}>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td className={styles.data}>
              <span className={styles.price}>Rs 190</span>
            </td>
            <td className={styles.data}>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.data}>
              <span className={styles.total}>Rs 380</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs 380
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>Rs 40
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs 420
          </div>
          <button className={styles.button}><a href="/orders/123">CHECKOUT NOW!</a></button>
        </div>
      </div>
        
    </div>
    </>
  );
};

export default Cart;
