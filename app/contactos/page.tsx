import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/contact-form"; // We will create this
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <PageHeader
                    title="Fale Connosco"
                    subtitle="Estamos disponíveis para analisar as necessidades do seu projeto e apresentar soluções logísticas adequadas."
                />

                <section className="py-20 bg-background">
                    <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold text-white uppercase border-l-4 border-primary pl-4">Informações de Contacto</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold uppercase mb-1">Sede Operacional</h3>
                                            <p className="text-zinc-400">{siteConfig.address.line1}<br />{siteConfig.address.line2}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold uppercase mb-1">Telefones</h3>
                                            <p className="text-zinc-400">{siteConfig.contact.phone.main}</p>
                                            <p className="text-zinc-400">{siteConfig.contact.phone.secondary}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold uppercase mb-1">Email</h3>
                                            <p className="text-zinc-400">{siteConfig.contact.email.geral}</p>
                                            <p className="text-zinc-400">{siteConfig.contact.email.comercial}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold uppercase mb-1">Horário de Atendimento</h3>
                                            <p className="text-zinc-400">Segunda a Sexta: 08:00 - 17:00</p>
                                            <p className="text-zinc-400">Sábado: 08:00 - 12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-[300px] bg-secondary border border-white/5 relative group overflow-hidden">
                                {/* Normally we would embed a Google Map here. Using a static image for now/placeholder */}
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                                    <p className="text-zinc-500 uppercase font-bold tracking-widest text-sm">Mapa de Localização</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-card border border-white/5 p-8 lg:p-12">
                            <h2 className="text-2xl font-bold text-white uppercase mb-6">Solicitar Proposta</h2>
                            <p className="text-zinc-400 mb-8 text-sm">
                                Preencha o formulário abaixo com os detalhes do seu projeto. A nossa equipa entrará em contacto brevemente.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
