import { ProductCardProps } from "../../@types/components";
import "./ProductCard.css";

const ProductCard = ({ title, image, price }: ProductCardProps) => {
  return (
    <>
      <img className="product-image" src={image} alt="" />
      <div className="product-card-title">{title}</div>
      <div className="product-card-price">${price}</div>
    </>
  );
};

export default ProductCard;
