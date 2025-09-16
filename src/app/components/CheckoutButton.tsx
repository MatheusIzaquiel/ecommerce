"use client";
import { formatPrice } from "@/libs/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

type CheckoutButtonProps = {
  totalPrice: number;
};

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
  const { user } = useUser();
  const router = useRouter();
  const cartStore = useCartStore();

  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart()
      router.push("/sign-in?sign-in?redirectUrl='/'")
      return
    }
    cartStore.setCheckout("checkout");
  };
  return (
    <div className=" flex flex-col flex-1 gap-2 items-center justify-center">
      <p className="text-teal-400 font-bold">
        Total: {formatPrice(totalPrice)}
      </p>
      <button
        onClick={handleCheckout}
        className="cursor-pointer rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"
      >
        Finalizar Compra
      </button>
    </div>
  );
}
