import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/libs/utils";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col shadow-md bg-slate-800 p-5 rounded-2xl justify-between">
        <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden">
          <ProductImage product={product} fill />
        </div>
        <div className="flex justify-between font-bold my-3">
          <p className="w-40 truncate">{product.name}</p>
          <p className="text-md text-teal-300">{formatPrice(product.price)}</p>
        </div>
        <AddCart product={product} />
      </div>
    </Link>
  );
}
