import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const nav = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response.data.data.product };

      console.log(payload);
      setProduct(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);

  return (
    <>
      <div className="text-center mt-10">
        <p>DetailProduct</p>
        <p>Nama Product: {product.name}</p>
        <p>Harga Product: {product.price}</p>
        <p>Kategori Product: {product.categoryId?.name}</p>
        <p>Penjual Product: {product.ownerId?.name}</p>

        <Button type="primary" onClick={() => nav(-1)}>
          Button
        </Button>
      </div>
    </>
  );
};

export default DetailProduct;
