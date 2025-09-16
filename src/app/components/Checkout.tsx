import { useCartStore } from "@/store"
import { useEffect } from "react"


export default function Checkout() {
  const cartStore = useCartStore()
  useEffect(() => {
    fetch("api/create-payment-intent", {
      method: "POSTT",
      headers: {
        "content=Type" : "application/json",
      },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    })
  }, [cartStore.cart, cartStore.setPaymentIntent])
  return (
    <div>Checkout</div>
  )
}
