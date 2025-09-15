"use client"

import { ProductType } from "@/types/ProductType"
import Image from "next/image"
import { useState } from "react"

type ProductImageProps = {
  product: ProductType
}

export default function ProductImage({product} : ProductImageProps) {
  const [loading, setLoading] = useState(true)
  return (
    <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className={`object-contain max-h-72 w-full  ${
            loading ? 'scale-110 blur-3xl grayscale'
            : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() =>  setLoading(false)}
        />
  )
}
