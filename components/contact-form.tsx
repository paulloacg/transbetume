"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    return (
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Nome Completo</label>
                    <Input placeholder="Seu nome" className="bg-secondary border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Empresa</label>
                    <Input placeholder="Nome da empresa" className="bg-secondary border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Compotativo</label>
                    <Input type="email" placeholder="email@empresa.com" className="bg-secondary border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Telefone</label>
                    <Input type="tel" placeholder="+244" className="bg-secondary border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Tipo de Serviço</label>
                <select className="flex h-10 w-full rounded-none border border-white/10 bg-secondary px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Selecione um serviço...</option>
                    <option>Transporte de Betume</option>
                    <option>Apoio a Obras</option>
                    <option>Transporte Pesado</option>
                    <option>Outros</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Detalhes do Projeto</label>
                <Textarea placeholder="Descreva a sua necessidade..." className="bg-secondary border-white/10 text-white placeholder:text-zinc-600 min-h-[120px] focus-visible:ring-primary" />
            </div>

            <Button type="submit" className="w-full text-base py-6">Enviar Pedido de Cotação</Button>
        </form>
    )
}
