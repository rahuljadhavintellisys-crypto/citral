"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "News & Events", href: "/news" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/30 dark:border-slate-800/30 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-green via-primary-green to-sky-blue flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Flame className="w-6 h-6 fill-white text-gold-accent animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-primary-green dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
              CITRAL
            </span>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 -mt-1 font-manrope">
              Transforming Lives
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-sans text-sm font-medium transition-colors hover:text-primary-green dark:hover:text-emerald-400 py-1 ${
                isActive(link.href)
                  ? "text-primary-green dark:text-emerald-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-green to-sky-blue rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-inner"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-gold-accent" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <Link href="/get-involved?tab=partner">
            <Button variant="outline" className="border-primary-green/30 hover:border-primary-green hover:bg-primary-green/5 text-primary-green dark:text-emerald-400 dark:border-emerald-500/30 dark:hover:bg-emerald-500/10 rounded-xl px-5 font-manrope text-sm font-semibold">
              Partner With Us
            </Button>
          </Link>

          <Link href="/get-involved?tab=donate">
            <Button className="bg-primary-green hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-xl px-5 font-manrope text-sm font-bold shadow-md shadow-emerald-900/10 hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2">
              <Heart className="w-4 h-4 fill-white animate-bounce" />
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex xl:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-gold-accent" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900" />
            }>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-primary-green flex items-center justify-center text-white">
                      <Flame className="w-5 h-5 fill-white text-gold-accent" />
                    </div>
                    <span className="font-heading font-extrabold text-lg text-primary-green dark:text-emerald-400">
                      CITRAL
                    </span>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-semibold py-2 transition-colors ${
                        isActive(link.href)
                          ? "text-primary-green dark:text-emerald-400 border-l-4 border-primary-green pl-3"
                          : "text-slate-600 dark:text-slate-300 pl-4 hover:text-primary-green"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 mt-8 border-t border-slate-100 dark:border-slate-900 pt-6">
                <Link href="/get-involved?tab=partner" className="w-full">
                  <Button variant="outline" className="w-full border-primary-green/40 text-primary-green dark:text-emerald-400 rounded-xl font-bold py-5">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/get-involved?tab=donate" className="w-full">
                  <Button className="w-full bg-primary-green hover:bg-emerald-800 text-white rounded-xl font-bold py-5 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    Donate Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
