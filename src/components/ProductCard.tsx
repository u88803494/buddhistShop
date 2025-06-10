interface ProductCardProps {
  image: string;
  price: string;
  specialPrice: string;
  title: string;
  width: string;
}

const ProductCard = ({ image, price, specialPrice, title, width }: ProductCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-white overflow-hidden"
      style={{
        width: `${width}px`,
      }}
    >
      {/* TODO: Hover detail */}
      <div className="relative w-full mb-3">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
      <div className="space-y-1">
        <p className="text-[#545454] text-center line-clamp-2">{title}</p>
        <div className="flex items-center justify-center space-x-1">
          <p className="text-[#939295] line-through text-sm">{price}</p>
          <p className="text-[#930000] text-base">{specialPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
