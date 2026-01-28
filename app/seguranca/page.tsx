import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { Shield, AlertTriangle, FileCheck, HeartPulse } from "lucide-react";

export default function SecurityPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Segurança & Compliance"
                    subtitle="O nosso compromisso com práticas responsáveis, segurança rodoviária e integridade operacional."
                />

                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white uppercase">Prioridade Operacional</h2>
                                <p className="text-zinc-400 leading-relaxed text-lg">
                                    Na TransBetume, a segurança não é apenas uma regra, é parte da nossa cultura. Operamos equipamentos pesados em ambientes complexos, e isso exige tolerância zero para falhas de segurança.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    <li className="flex gap-4">
                                        <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold uppercase text-sm">Proteção da Carga e Equipas</h4>
                                            <p className="text-zinc-500 text-sm">Protocolos rigorosos para garantir que todos chegam bem ao destino.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold uppercase text-sm">Conformidade Legal</h4>
                                            <p className="text-zinc-500 text-sm">Veículos e motoristas com toda a documentação e seguros em dia.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-secondary p-8 border border-white/5 relative">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
                                <h3 className="text-xl font-bold text-white uppercase mb-6">Pilares de Segurança</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-black/30 p-4 border border-white/5 hover:border-primary/50 transition-colors">
                                        <AlertTriangle className="w-8 h-8 text-primary mb-2" />
                                        <span className="text-zinc-300 text-sm font-bold uppercase">Prevenção de Acidentes</span>
                                    </div>
                                    <div className="bg-black/30 p-4 border border-white/5 hover:border-primary/50 transition-colors">
                                        <HeartPulse className="w-8 h-8 text-primary mb-2" />
                                        <span className="text-zinc-300 text-sm font-bold uppercase">Saúde Ocupacional</span>
                                    </div>
                                    <div className="bg-black/30 p-4 border border-white/5 hover:border-primary/50 transition-colors">
                                        <Shield className="w-8 h-8 text-primary mb-2" />
                                        <span className="text-zinc-300 text-sm font-bold uppercase">Seguros Ativos</span>
                                    </div>
                                    <div className="bg-black/30 p-4 border border-white/5 hover:border-primary/50 transition-colors">
                                        <FileCheck className="w-8 h-8 text-primary mb-2" />
                                        <span className="text-zinc-300 text-sm font-bold uppercase">Formação Contínua</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
