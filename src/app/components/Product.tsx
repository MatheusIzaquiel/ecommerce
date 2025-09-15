
import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/libs/utils";


type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col shadow-md bg-slate-800 p-5 rounded-2xl justify-between">
      <div className="relative  w-full max-h-72 flex-1 flex items-center bg-white rounded-2xl">
        <ProductImage product={product}/>
      </div>
      <div className="flex justify-between font-bold my-3">
        <p className="w-40 truncate">{product.name}</p>
        <p className="text-md text-teal-300">{formatPrice(product.price)}</p>
      </div>
      <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
