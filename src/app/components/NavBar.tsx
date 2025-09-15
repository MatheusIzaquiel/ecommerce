"use client"; // Essencial para Clerk no client-side

import { useCartStore } from "@/store";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  //const useStore = useCartStore()

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-2 px-8 z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Next Store
      </Link>
      <div className="flex items-center justify-center gap-8">
        <div className="relative flex items-center cursor-pointer">
          <ShoppingCart />
          <span className="text-[12px] font-bold bg-teal-600 w-3 h-3 rounded-full flex items-center justify-center p-2 absolute -top-3 -right-3 ">1</span>
        </div>
        <div>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: 40, height: 40 }, // Tamanho fixo para visibilidade
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border border-gray-400 px-2 py-3 rounded-md text-sm cursor-pointer">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
