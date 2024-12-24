import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const [productData, setProductData] = useState([]);

  // Product Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const result = await res.json();
      setProductData(result.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className={styles.homeWrapper}>
        <Cards productData={productData} />
      </main>
    </>
  );
};

export default Home;
