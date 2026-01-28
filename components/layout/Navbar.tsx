"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navItems = [
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Frota", href: "/frota" },
    { name: "Infraestrutura", href: "/infraestrutura" },
    { name: "Segurança", href: "/seguranca" },
    { name: "Contactos", href: "/contactos" },
];

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}>
            {/* Top Bar for Contacts - Hidden on scroll to save space, or keep simpler */}
            <div className={cn(
                "hidden md:flex w-full bg-secondary transition-all duration-300 overflow-hidden",
                scrolled ? "h-0 py-0 opacity-0" : "h-auto py-2 opacity-100 border-b border-white/5"
            )}>
                <div className="max-w-[1400px] mx-auto px-6 w-full flex justify-end items-center gap-6 text-[11px] font-medium tracking-wide text-zinc-400">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                        <Mail className="w-3 h-3" />
                        <span>{siteConfig.contact.email.comercial}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                        <Phone className="w-3 h-3" />
                        <span>{siteConfig.contact.phone.main}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="hover:opacity-90 transition-opacity z-50">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors tracking-wide uppercase relative py-2",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-zinc-300 hover:text-white"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-in fade-in zoom-in duration-300" />
                                )}
                            </Link>
                        ))}
                    </div>
                    <Link href="/contactos">
                        <Button size="sm" className="h-10 font-bold">
                            Solicitar Cotação
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-secondary border-l border-white/10 p-0">
                            <div className="flex flex-col h-full bg-secondary">
                                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                                <SheetDescription className="sr-only">Navegue pelas páginas principais do site.</SheetDescription>

                                <div className="p-8 border-b border-white/5">
                                    <Logo />
                                </div>
                                <div className="flex-1 overflow-y-auto py-8 px-6">
                                    <div className="flex flex-col gap-2">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "flex items-center justify-between p-4 rounded-none border-l-2 transition-all duration-200",
                                                    pathname === item.href
                                                        ? "bg-white/5 border-primary text-primary"
                                                        : "border-transparent text-zinc-400 hover:text-white hover:bg-white/5 hover:border-zinc-500"
                                                )}
                                            >
                                                <span className="text-sm font-bold uppercase tracking-wider">{item.name}</span>
                                                {pathname === item.href && <ChevronRight className="w-4 h-4" />}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-12 space-y-6">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-4">Contactos Diretos</h4>
                                        <div className="px-4 space-y-4">
                                            <div className="flex items-center gap-3 text-zinc-400">
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium">{siteConfig.contact.phone.main}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-zinc-400">
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium">{siteConfig.contact.email.geral}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-white/5 bg-black/20">
                                    <Link href="/contactos" onClick={() => setOpen(false)}>
                                        <Button className="w-full py-6 text-base shadow-xl shadow-primary/10">
                                            PEDIR COTAÇÃO <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
