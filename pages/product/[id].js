import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import Head from 'next/head'

const Product = () => {  
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza2.png",
    name: "PEPPORINI",
    price: [190, 230, 270],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <>
      <Head>
        <title>Select Pizza</title>
        <meta name="description" content="Best Shop in Town !!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.container}>
    
      <div className={styles.left}>
      <div className={styles.imgcontainer}>
      <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
      </div>
      </div>


      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>Rs {pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose Size</h3>
        <div className={styles.sizes}>

          <div className={styles.size} onClick={()=>setSize(0)}>
            <Image src="/img/logo.png" alt="" layout="fill"/>
            <span className={styles.number}>Small</span>
          </div>

          <div className={styles.size} onClick={()=>setSize(1)}>
            <Image src="/img/logo.png" alt="" layout="fill"/>
            <span className={styles.number}>Medium</span>
          </div>

          <div className={styles.size}onClick={()=>setSize(2)}>
            <Image src="/img/logo.png" alt="" layout="fill"/>
            <span className={styles.number}>Large</span>
          </div>

        </div>

        <h3 className={styles.choose}>Choose Toppings</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>

        <h3 className={styles.choose}>Add to Cart</h3>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}><a href="/cart">Add</a></button>
        </div>

      </div>
    </div>
    </>
  );
};

export default Product;
