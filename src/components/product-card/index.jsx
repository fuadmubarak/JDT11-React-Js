import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const { Meta } = Card;

const ProductCard = ({
  random,
  productName,
  productPrice,
  productCategory,
  onClick,
}) => {
  const nav = useNavigate();

  return (
    <>
      <Card
        className="product-card"
        onClick={() => nav(`/detail-product/${onClick}`)}
        hoverable
        cover={
          <img
            alt="example"
            src={`https://picsum.photos/200?random=${random}`}
          />
        }
      >
        <Meta
          title={productName}
          description={
            <div>
              <div>{productCategory}</div>
              <div>Rp. {productPrice}</div>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default ProductCard;
