"use client";  // Essencial para Clerk no client-side

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  const { isSignedIn, user } = useUser();  // Hook para depurar

  // Logs para depuração (remova depois)
  console.log("Estado de auth:", { isSignedIn, userId: user?.id, fullName: user?.fullName });

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-2 px-8 z-50 bg-slate-800 text-gray-300">
      <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">
        Next Store
      </Link>
      <div className="flex items-center justify-center gap-8">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: { width: 40, height: 40 },  // Tamanho fixo para visibilidade
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
    </nav>
  );
}