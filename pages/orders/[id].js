import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        
          <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123</span>
              </td>
              <td>
                <span className={styles.name}>FirstName LastName</span>
              </td>
              <td>
                <span className={styles.address}>Address Line 1, Address Line 2</span>
              </td>
              <td>
                <span className={styles.total}>Rs 500</span>
              </td>
            </tr>
            </tbody>
            
          </table>
        

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={50} height={50} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(0)}>
            <Image src="/img/bake.png" width={50} height={50} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bike.png" width={50} height={50} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={50} height={50} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>        
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
          <button className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
