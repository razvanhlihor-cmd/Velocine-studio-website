"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/examples", label: "Examples" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            {/* Replace with actual logo SVG later */}
            <span className="font-bold tracking-tight text-xl text-zinc-900">Velocine</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Magnetic intensity={0.1}>
              <Link href="https://studio.velocine.app/login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
            </Magnetic>
            <Magnetic intensity={0.15}>
              <Link href="https://studio.velocine.app/login">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start free
                </Button>
              </Link>
            </Magnetic>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 pt-6">
      {navLinks.map((link) => (
        <SheetClose asChild key={link.href}>
          <Link
            href={link.href}
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </SheetClose>
      ))}
      <div className="flex flex-col gap-2 pt-4 border-t border-border/40 mr-4">
        <SheetClose asChild>
          <Link href="https://studio.velocine.app/login">
            <Button variant="outline" className="w-full">
              Sign in
            </Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="https://studio.velocine.app/login">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Start free
            </Button>
          </Link>
        </SheetClose>
      </div>
    </div>
  );
}
