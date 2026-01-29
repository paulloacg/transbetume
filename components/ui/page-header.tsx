import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
    return (
        <section className={cn("relative py-14 md:py-20 bg-secondary overflow-hidden", className)}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">TransBetume Institucional</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-none max-w-4xl">
                    {title}
                </h1>
                <p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
