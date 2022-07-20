import React from "react";
import HomePageBanner from "../../Component/HomePageBanner/HomePageBanner";
import Product from "../../Component/Product/Product";
import "./Home.css";
import product1 from "../../assets/img/product6.f19b14e6.png";
const Home = () => {
  return (
    <React.Fragment>
      <HomePageBanner />

      <section className="product-section">
        <div className="container">
          <div className="row">
            <h1 className="text-center product-main-title">Our Products</h1>
          </div>
          <div className="row">
            <Product
              title="Green Dress For Woman"
              description="Green Dress For Woman Green Dress For Woman"
              img={product1}
            />
            <Product
              title="Green Dress For Woman"
              description="Green Dress For Woman Green Dress For Woman"
              img={product1}
            />
            <Product
              title="Green Dress For Woman"
              description="Green Dress For Woman Green Dress For Woman"
              img={product1}
            />
            <Product
              title="Green Dress For Woman"
              description="Green Dress For Woman Green Dress For Woman"
              img={product1}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
