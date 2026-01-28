import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Shield, Briefcase, Clock, Truck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Nossa História & Propósito"
                    subtitle="Uma empresa angolana vocacionada para o transporte pesado e logística especializada, com atuação estratégica no apoio a projetos de infraestrutura."
                />

                {/* Introduction */}
                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white uppercase">Parceiro Operacional Confiável</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                A {siteConfig.name} atua no transporte especializado e apoio logístico a projetos de infraestrutura, obras públicas e operações industriais em Angola. Com uma estrutura orientada para a execução, posicionamo-nos como um elo essencial entre o fornecimento de materiais e a execução de obras.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                O nosso compromisso é com a eficiência, a segurança e o cumprimento rigoroso dos prazos, garantindo que os projetos dos nossos clientes avancem sem interrupções logísticas.
                            </p>

                            <div className="pt-8">
                                <div className="bg-secondary/50 p-6 border border-white/5">
                                    <h3 className="text-white font-bold mb-2 uppercase text-sm">Estrutura Legal</h3>
                                    <p className="text-zinc-400 text-sm">
                                        Empresa formalmente constituída em Angola, com conformidade fiscal e enquadramento legal para prestação de serviços de transporte e logística.
                                        <br />
                                        <span className="text-primary font-bold mt-2 block">NIF: {siteConfig.nif}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Vision Values Grid */}
                        <div className="grid gap-6">
                            <Card className="bg-card border-white/5 hover:border-primary/30 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">Missão</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400 text-sm">
                                        Garantir soluções de transporte e logística eficientes, seguras e alinhadas às exigências dos grandes projetos de infraestrutura em Angola.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-white/5 hover:border-primary/30 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">Visão</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400 text-sm">
                                        Ser uma referência nacional no transporte pesado e apoio logístico para obras e projetos estratégicos.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-secondary border-t border-white/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-2xl font-bold text-white uppercase mb-12 text-center">Nossos Valores</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Shield, title: "Segurança", text: "Prioridade absoluta em todas as operações." },
                                { icon: Clock, title: "Prazos", text: "Cumprimento rigoroso dos cronogramas." },
                                { icon: Briefcase, title: "Responsabilidade", text: "Compromisso com o cliente e a carga." },
                                { icon: Truck, title: "Rigor Técnico", text: "Equipamentos e processos adequados." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-background border border-white/5 rounded-none">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white uppercase">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm">{item.text}</p>
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
