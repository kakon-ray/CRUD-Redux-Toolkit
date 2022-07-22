import React from "react";
import HomePageBanner from "../../Component/HomePageBanner/HomePageBanner";
import Product from "../../Component/Product/Product";
import "./Home.css";
import product1 from "../../assets/img/product6.f19b14e6.png";
import { useSelector } from "react-redux";
const Home = () => {
  const products = useSelector((state) => state.productReducer.product);

  return (
    <React.Fragment>
      <HomePageBanner />

      <section className="product-section">
        <div className="container">
          <div className="row">
            <h1 className="text-center product-main-title">Our Products</h1>
          </div>
          <div className="row">
            {products &&
              products.map((product) => {
                return (
                  <Product
                    title={product.title}
                    description={product.desc}
                    img={product.img}
                    id={product.id}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
