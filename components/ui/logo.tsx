export const Logo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="h-10 w-10 bg-primary flex items-center justify-center">
                <span className="text-black font-bold text-2xl">T</span>
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tighter leading-none">
                    TRANS<span className="text-primary">BETUME</span>
                </span>
                <span className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase leading-none">
                    Logística & Obras
                </span>
            </div>
        </div>
    );
};
