export default interface Product {
  name: string;
  description: string;
  type: "funko" | "videogame";
  price: number;
  image: string;
  brand: string;
  stock: number;
  platform?: "Xbox" | "PlayStation";
}
