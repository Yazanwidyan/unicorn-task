import { ProductCardProps } from "../../@types";
import ProductCard from "../ProductCard/ProductCard";
import "./styles.css";

const List = ({ list }: any) => (
  <>
    {list.map(
      ({
        id,
        title,
        image,
        category,
        description,
        price,
      }: ProductCardProps) => {
        return (
          <div className="product-card">
            <ProductCard
              key={id}
              image={image}
              title={title}
              category={category}
              description={description}
              price={price}
            />
          </div>
        );
      }
    )}
  </>
);

export default List;
