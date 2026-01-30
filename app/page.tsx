import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Truck, HardHat, Building2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRANSBETUME | Especialista em Transporte de Betume e Logística Pesada em Angola",
  description: "Líder no transporte de betume e materiais de construção em Angola. Soluções logísticas robustas para infraestrutura e grandes obras públicas.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-zinc-900 z-0">
            <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-80 mix-blend-overlay animate-subtle-zoom"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/80"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-20">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Transporte & Logística Pesada</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight uppercase">
                Infraestrutura <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Em Movimento</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed border-l-4 border-primary pl-6">
                A TransBetume é especialista em transporte seguro de betume, materiais de construção e apoio logístico para grandes obras e infraestruturas em Angola.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link href="/contactos">
                  <Button size="lg" className="w-full sm:w-auto text-base">Solicitar Proposta <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </Link>
                <Link href="/sobre">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">Conhecer a Empresa</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest text-white">Scroll Down</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-primary py-12 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-4xl md:text-5xl font-black text-black">+50</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-black/70">Projetos Executados</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-4xl md:text-5xl font-black text-black">100%</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-black/70">Nacional</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-4xl md:text-5xl font-black text-black">24/7</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-black/70">Operação Contínua</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-4xl md:text-5xl font-black text-black">+18</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-black/70">Províncias Cobertas</p>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-24 bg-background relative">
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Quem Somos</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase leading-none">
                  Parceiro Robusto para <br /> Desafios Reais.
                </h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-lg">
                A TransBetume não é apenas uma transportadora. Somos um braço operacional estratégico para construtoras, indústrias e o governo de Angola.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Especializados na movimentação de materiais críticos como betume e equipamentos pesados, garantimos que a sua obra nunca pare por falhas logísticas. A nossa frota é moderna, a nossa equipa é técnica e o nosso compromisso é com o resultado.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['Frota Própria & Dedicada', 'Cobertura Nacional', 'Manutenção Preventiva', 'Compliance & Segurança'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/sobre" className="inline-block pt-4">
                <Button variant="secondary" className="border-l-4 border-primary pl-6">Conheça Nossa História</Button>
              </Link>
            </div>

            <div className="relative w-full">
              <div className="aspect-[4/3] bg-zinc-800 relative z-10 border border-white/10 overflow-hidden group w-full">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-[url('/about-hq.png')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"></div>

                <div className="absolute bottom-0 left-0 bg-primary p-6 z-20">
                  <p className="text-black font-bold text-xl leading-tight uppercase">Sede em <br /> Luanda</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 z-0 block"></div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-secondary/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">O Que Fazemos</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase leading-none">
                  Soluções Industriais & <br /> Logística de Obra
                </h3>
              </div>
              <Link href="/servicos">
                <Button variant="outline">Ver Todos os Serviços</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="group bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 p-8 space-y-6 relative overflow-hidden">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Truck className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase">Transporte de Betume</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Transporte especializado com cisternas térmicas adequadas, garantindo a temperatura e qualidade do material até ao local da obra.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Service 2 */}
              <div className="group bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 p-8 space-y-6 relative overflow-hidden">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Building2 className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase">Apoio a Obras</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Logística integrada para estaleiros, fornecimento contínuo de materiais e gestão de fluxo de camiões em grandes empreitadas.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Service 3 */}
              <div className="group bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 p-8 space-y-6 relative overflow-hidden">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <HardHat className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase">Logística Industrial</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Soluções dedicadas para indústrias que necessitam de transporte pesado regular, seguro e com controlo rigoroso de horários.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE & SAFETY STRIP */}
        <section className="py-16 bg-gradient-to-r from-zinc-900 to-black border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <ShieldCheck className="w-16 h-16 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-1">Segurança & Compliance</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Operamos com rigoroso cumprimento das normas de segurança rodoviária e responsabilidade fiscal (NIF {siteConfig.nif}).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-widest">
                Frota Monitorada
              </div>
              <div className="px-6 py-3 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-widest">
                Condutores Certificados
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-[0.02]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
              Pronto para <br /> Mover a sua Obra?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
              Fale com a nossa equipa comercial e receba uma proposta técnica adaptada à escala do seu projeto.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/contactos">
                <Button size="lg" className="h-16 px-12 text-lg">
                  Falar com Especialistas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
