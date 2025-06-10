import { clsx } from "clsx";

interface ProductCardProps {
  height: string;
  image: string;
  price: string;
  specialPrice: string;
  title: string;
  width: string;
}

const ProductCard = ({ height, image, price, specialPrice, title, width }: ProductCardProps) => {
  return (
    <div
      className=""
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <p>{price}</p>
          <p>{specialPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
