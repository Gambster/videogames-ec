const Product = ({
  name,
  type,
  image,
  brand,
  price,
}: {
  name: string;
  type: string;
  image: string;
  brand: string;
  price: number;
}) => {
  return (
    <div className="w-60 flex flex-col items-center p-3">
      <img src="/images/halo_infinite.png" className="w-11/12" />
      <span className="text-sm opacity-70">{type}</span>
      <span className="text-lg">{name}</span>
      <span className="text-xs opacity-70">{brand}</span>
      <span className="text-2xl text-rose-500 font-bold">{price}</span>
    </div>
  );
};

export default Product;
