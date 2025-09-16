"use client";
import { formatPrice } from "@/libs/utils";
import { useCartStore } from "@/store";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import Checkout from "./Checkout";

export default function CartDrawer() {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  return (
    <div
      onClick={() => useStore.toggleCart()}
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} //essa função permite que possamos clicar na área do cart sem fechar ela
        className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll"
      >
        <div className="flex items-center gap-3">
          <ArrowLeft
            onClick={() => useStore.toggleCart()}
            className="cursor-pointer text-teal-600"
          />
          <button
            onClick={() => useStore.toggleCart()}
            className="hidden md:flex cursor-pointer font-bold text-sm text-teal-600"
          >
            Voltar para loja
          </button>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        {useStore.onCheckOut == "checkout" && (
         <>
           
          {useStore.cart.map((item) => (
            <div
            key={item.id}
            className="flex flex-col  mx-auto lg:flex-row gap-4 py-4 items-center justify-start max-w-3xl"
            >
            <div className="bg-white p-0.5 rounded-md">
            <Image
            src={item.image}
            alt={item.name}
            width={120}
            height={120}
            className="object-cover w-24"
            />
            </div>
            <div className="flex flex-col gap-2 p-2 lg:m-0">
            <div className="flex flex-col items-center justify-center">
            <h2 className="md:truncate">{item.name}</h2>
            <h2 className="mr-2.5">Quantidade: {item.quantity}</h2>
            <p className="text-shadow-teal-600 text-sm font-bold">
            Preço: {formatPrice(item.price)}
            </p>
            </div>
            
            <div className="flex gap-2 flex-col">
                <button
                  className="cursor-pointer flex items-center justify-center text-sm w-[100px] rounded-md py-0.5 px-1 md:py-1 md:px-2 border border-teal-500"
                  onClick={() => useStore.addProduct(item)}
                  >
                  Adicionar
                </button>
                <button
                  className="cursor-pointer flex items-center justify-center text-sm w-[100px] rounded-md py-1 px-2 border border-teal-500"
                  onClick={() => useStore.removeFromCart(item)}
                  >
                  Remover
                </button>
              </div>
            </div>
            </div>
          ))}
         </>
        )}

        {useStore.cart.length > 0 && useStore.onCheckOut == "cart" && (
          <CheckoutButton totalPrice={totalPrice}/>
        )}
        {useStore.onCheckOut == "checkout" && (
          <Checkout/>
        )}
      </div>
    </div>
  );
}
