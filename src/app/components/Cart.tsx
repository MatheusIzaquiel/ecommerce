"use client";
import { ShoppingCart } from "lucide-react";
import CartDrawer from "./CartDrawer";
import { useCartStore } from "@/store";

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
          {useStore.cart?.length}
        </span>
      </div>
      {useStore.isOpen && <CartDrawer />}
    </>
  );
}
