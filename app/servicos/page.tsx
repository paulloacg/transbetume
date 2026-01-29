import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { Truck, Building2, HardHat, Factory, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serviços de Logística e Transporte",
    description: "Oferecemos transporte de betume, apoio a obras públicas, logística industrial e transporte rodoviário pesado em toda Angola.",
};

const services = [
    {
        icon: Truck,
        title: "Transporte de Betume",
        description: "Transporte especializado de betume para projetos rodoviários, obras públicas e empreendimentos de infraestrutura ensuring temperature control and technical compliance.",
        features: ["Cisternas Térmicas", "Controlo de Temperatura", "Operação 24/7"]
    },
    {
        icon: Building2,
        title: "Materiais de Construção",
        description: "Movimentação de materiais essenciais para obras, incluindo agregados, equipamentos e insumos, com planeamento logístico adequado às necessidades do projeto.",
        features: ["Agregados", "Cimento", "Estruturas Pré-fabricadas"]
    },
    {
        icon: HardHat,
        title: "Logística para Obras Públicas",
        description: "Apoio logístico completo para empreendimentos públicos, garantindo fluxo contínuo de materiais e suporte operacional às frentes de obra.",
        features: ["Gestão de Fluxo", "Abastecimento Contínuo", "Coordenação com Estaleiro"]
    },
    {
        icon: Map,
        title: "Transporte Rodoviário Pesado",
        description: "Operações de transporte de cargas pesadas e especiais por toda Angola, com foco em segurança, planeamento de rotas e eficiência operacional.",
        features: ["Cargas Indivisíveis", "Equipamentos Pesados", "Licenças Especiais"]
    },
    {
        icon: Factory,
        title: "Apoio a Indústria",
        description: "Soluções logísticas para operações industriais, assegurando fornecimento contínuo de matérias-primas e escoamento de produção.",
        features: ["Logística Inbound/Outbound", "Just-in-Time", "Contratos Dedicados"]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Nossos Serviços"
                    subtitle="Soluções completas de transporte e logística para impulsionar a infraestrutura nacional."
                />

                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="group bg-card border border-white/5 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                                    <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 pt-6 border-t border-white/5">
                                        {service.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* CTA Card */}
                            <div className="bg-primary p-8 flex flex-col justify-center items-center text-center h-full">
                                <h3 className="text-2xl font-black text-black uppercase mb-4">Precisa de uma solução específica?</h3>
                                <p className="text-black/80 font-medium mb-8">
                                    Desenvolvemos planos logísticos adaptados à realidade da sua obra.
                                </p>
                                <Link href="/contactos" className="w-full">
                                    <Button variant="secondary" className="w-full bg-black text-white hover:bg-zinc-800 border-none">
                                        Falar com Consultor
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
