import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { Hammer, HardHat, LandPlot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InfrastructurePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Infraestrutura & Projetos"
                    subtitle="Atuamos como parceiro estratégico no desenvolvimento de infraestruturas críticas."
                />

                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6">
                        {/* Sectors */}
                        <div className="grid lg:grid-cols-2 gap-16 mb-24">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white uppercase">Apoio a Grandes Empreendimentos</h2>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    A TransBetume participa ativamente no suporte logístico de projetos de infraestrutura, atuando em colaboração próxima com construtoras, empresas de engenharia e entidades públicas.
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    Entendemos a complexidade de uma obra e a importância de um "Supply Chain" que não falha. Seja na construção de estradas, aeroportos ou zonas industriais, a nossa operação garante que os materiais cheguem na hora certa.
                                </p>
                                <Button className="mt-4">Ver Portfólio de Serviços</Button>
                            </div>
                            <div className="bg-secondary border border-white/5 p-8 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <LandPlot className="w-32 h-32 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase mb-6 relative z-10">Setores de Atuação</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-center gap-4 p-4 bg-black/20 border border-white/5 hover:border-primary/50 transition-colors">
                                        <div className="bg-primary/20 p-2"><Hammer className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <span className="text-white font-bold block uppercase text-sm">Construção Civil</span>
                                            <span className="text-zinc-500 text-xs">Abastecimento de estaleiros</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 bg-black/20 border border-white/5 hover:border-primary/50 transition-colors">
                                        <div className="bg-primary/20 p-2"><LandPlot className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <span className="text-white font-bold block uppercase text-sm">Obras Rodoviárias</span>
                                            <span className="text-zinc-500 text-xs">Transporte de asfalto e betume</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 bg-black/20 border border-white/5 hover:border-primary/50 transition-colors">
                                        <div className="bg-primary/20 p-2"><HardHat className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <span className="text-white font-bold block uppercase text-sm">Indústria Extrativa</span>
                                            <span className="text-zinc-500 text-xs">Logística de minérios e inertes</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
