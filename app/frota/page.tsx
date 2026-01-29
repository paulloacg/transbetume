import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { Truck, Scale, Map, ShieldCheck, Wrench, Fuel } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nossa Frota & Equipamentos",
    description: "Explore nossa frota de camiões cisterna para betume, basculantes e pranchas pesadas. Manutenção rigorosa e tecnologia de rastreio.",
};

export default function FleetPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Frota & Operações"
                    subtitle="Estrutura operacional dedicada para transporte pesado e projetos de grande escala."
                />

                {/* Fleet Grid */}
                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Fleet Item 1 */}
                            <div className="space-y-4">
                                <div className="aspect-video bg-secondary relative border-b-4 border-primary">
                                    {/* Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-800 flex items-center justify-center">
                                        <Truck className="w-16 h-16 text-zinc-700" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1">
                                        <span className="text-white text-xs font-bold uppercase">Caminhões Cisterna</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase">Transporte de Betume</h3>
                                <p className="text-zinc-400 text-sm">
                                    Veículos equipados com sistemas de aquecimento e controlo térmico para garantir a especificação do produto.
                                </p>
                            </div>

                            {/* Fleet Item 2 */}
                            <div className="space-y-4">
                                <div className="aspect-video bg-secondary relative border-b-4 border-primary">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-800 flex items-center justify-center">
                                        <Truck className="w-16 h-16 text-zinc-700" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1">
                                        <span className="text-white text-xs font-bold uppercase">Camiões Basculantes</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase">Inertes & Materiais</h3>
                                <p className="text-zinc-400 text-sm">
                                    Frota robusta para transporte de grandes volumes de agregados, solos e materiais de construção.
                                </p>
                            </div>

                            {/* Fleet Item 3 */}
                            <div className="space-y-4">
                                <div className="aspect-video bg-secondary relative border-b-4 border-primary">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-800 flex items-center justify-center">
                                        <Truck className="w-16 h-16 text-zinc-700" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1">
                                        <span className="text-white text-xs font-bold uppercase">Pranchas & Pesados</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase">Máquinas & Equipamentos</h3>
                                <p className="text-zinc-400 text-sm">
                                    Soluções para mobilização e desmobilização de equipamentos pesados para estaleiros.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operational Stats / Capabilities */}
                <section className="py-20 bg-secondary border-y border-white/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="mb-12 text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white uppercase mb-4">Capacidade & Tecnologia</h2>
                            <p className="text-zinc-400 text-lg">
                                Investimos continuamente na modernização da nossa frota e na qualificação da nossa equipa técnica.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Monitorização GPS", icon: Map, desc: "Rastreio em tempo real de todas as cargas." },
                                { title: "Manutenção Própria", icon: Wrench, desc: "Oficinas dedicadas para máxima disponibilidade." },
                                { title: "Controlo de Consumo", icon: Fuel, desc: "Eficiência operacional e sustentabilidade." },
                                { title: "Cargas Seguradas", icon: ShieldCheck, desc: "Total proteção para a mercadoria do cliente." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-card p-6 border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                                    <item.icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-white font-bold uppercase text-sm mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
