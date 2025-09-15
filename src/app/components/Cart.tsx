"use client";
import { useCartStore } from "@/store";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  const useStore = useCartStore();
  return (
    <>
      <div
        onClick={() => useStore.toggleCart()}
        className="relative flex items-center cursor-pointer"
      >
        <ShoppingCart />
        <span className="text-[12px] font-bold bg-teal-600 w-3 h-3 rounded-full flex items-center justify-center p-2 absolute -top-3 -right-3 ">
          1
        </span>
      </div>
      {useStore.isOpen && (
        <div
        onClick={() => useStore.toggleCart()} 
        className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
          <div 
          onClick={(e) => e.stopPropagation()}//essa função permite que possamos clicar na área do cart sem fechar ela
          className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 ">
            <h1>Carrinho</h1>
            {
              useStore.cart.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))
            }
          </div>
        </div>
      )}
    </>
  );
}
