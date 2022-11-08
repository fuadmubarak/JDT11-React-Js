import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const url = "/api/v1/products/";
      const response = await api.get(url);
      const payload = [...response.data.data.products];

      console.log(payload);
      setProduct(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    try {
      const url = "/api/v1/city/";
      const response = await api.get(url);
      const payload = [...response.data.data.cities];

      console.log(payload);
      setCities(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <Banner />

      <h1 className="text-center">Cities</h1>

      <div className="bg-primary text-white text-center grid grid-cols-5 gap-4 m-10 rounded">
        {product.map((item) => {
          return (
            <span key={item.id}>
              {item.name}, {item.price}
            </span>
          );
        })}
      </div>

      <div className="bg-primary text-white text-center grid grid-cols-5 gap-4 m-10 rounded">
        {cities.map((prod) => {
          return <span key={prod.id}>{prod.name}</span>;
        })}
      </div>
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {product.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.name}
            productCategory={item.categoryId.name}
            productPrice={item.price}
            onClick={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
