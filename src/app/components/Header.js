import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#343434] text-[#C5B475] px-4 py-3 flex items-center justify-between md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/logo.jpg"
          width={70}
          height={100}
          alt="Barber 1"
          className="rounded"
        />
        <span className="text-lg font-semibold">DC’S Rêves Barber Shop</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#C5B475] text-[#343434]">
          <div className="grid gap-4 py-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Inicio
            </Link>
            <Link
              href="/booking"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Agendar
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              Acerca de
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="hidden lg:flex gap-6">
        <Link
          href="/"
          className="text-lg font-semibold hover:underline underline-offset-4"
          prefetch={false}
        >
          Inicio
        </Link>
        <Link
          href="/booking"
          className="text-lg font-semibold hover:underline underline-offset-4"
          prefetch={false}
        >
          Agendar
        </Link>
        <Link
          href="/about"
          className="text-lg font-semibold hover:underline underline-offset-4"
          prefetch={false}
        >
          Acerca de
        </Link>
      </nav>
    </header>
  );
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
