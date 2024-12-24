import styles from "./Cards.module.css";
const Cards = ({ productData }) => {
  return (
    <>
      {productData.map((product) => (
        <div div className={styles.cards_wrapper} key={product.id}>
          <img src={product.thumbnail} alt="logo" />
          <span title={product.description} className={styles.title}>
            {product.title}
          </span>
          <div className={styles.stock_rating}>
            <span>stock: {product.stock}</span>
            <span>rating:{product.rating}</span>
          </div>
          <span className={styles.price}>price: ${product.price}</span>
        </div>
      ))}
    </>
  );
};

export default Cards;
