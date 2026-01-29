import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Truck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Image
                        src="/logotipo.png"
                        alt={siteConfig.name}
                        width={180}
                        height={60}
                        className="h-12 w-auto object-contain invert brightness-0 opacity-90"
                    />
                    <p className="text-white text-sm leading-relaxed">
                        Parceiro operacional confiável para empresas de construção, indústria e entidades públicas em Angola.
                        Transporte pesado, logística estratégica e infraestrutura.
                    </p>
                    <div className="flex gap-4">
                        {/* Icons placeholders or real social links if available */}
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                            <Truck className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6">Navegação</h3>
                    <ul className="space-y-4">
                        <li><Link href="/sobre" className="text-zinc-200 hover:text-primary transition-colors text-sm">Sobre a Empresa</Link></li>
                        <li><Link href="/servicos" className="text-zinc-200 hover:text-primary transition-colors text-sm">Nossos Serviços</Link></li>
                        <li><Link href="/frota" className="text-zinc-200 hover:text-primary transition-colors text-sm">Frota & Equipamentos</Link></li>
                        <li><Link href="/infraestrutura" className="text-zinc-200 hover:text-primary transition-colors text-sm">Projetos de Infraestrutura</Link></li>
                        <li><Link href="/contactos" className="text-zinc-200 hover:text-primary transition-colors text-sm">Fale Connosco</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6">Serviços</h3>
                    <ul className="space-y-4">
                        <li className="text-zinc-200 text-sm">Transporte de Betume</li>
                        <li className="text-zinc-200 text-sm">Logística de Obras</li>
                        <li className="text-zinc-200 text-sm">Transporte Pesado</li>
                        <li className="text-zinc-200 text-sm">Apoio Industrial</li>
                        <li className="text-zinc-200 text-sm">Materiais de Construção</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contactos</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-white text-sm">{siteConfig.address.line1}<br />{siteConfig.address.line2}</span>
                        </li>
                        <li className="flex gap-4">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="flex flex-col text-white text-sm">
                                <span>{siteConfig.contact.phone.main}</span>
                                <span>{siteConfig.contact.phone.secondary}</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-white text-sm">{siteConfig.contact.email.geral}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
                    </p>
                    <span className="hidden md:block text-zinc-700 text-xs">|</span>
                    <a
                        href="https://dsangola.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 text-xs hover:text-primary transition-colors flex items-center gap-1"
                    >
                        Desenvolvido pela <span className="font-bold">DS ANGOLA</span>
                    </a>
                </div>
                <div className="flex gap-6">
                    <span className="text-zinc-600 text-xs">NIF: {siteConfig.nif}</span>
                    <span className="text-zinc-600 text-xs">Política de Privacidade</span>
                </div>
            </div>
        </footer>
    );
}
