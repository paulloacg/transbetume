export const siteConfig = {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "TRANSBETUME Lda",
    shortName: "TransBetume",
    nif: process.env.NEXT_PUBLIC_COMPANY_NIF || "5001267264",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://transbetume.com", // Assuming .com or .co.ao
    description: "Líder em transporte pesado, logística de betume e apoio a infraestruturas em Angola. Frota moderna e operações seguras em todas as províncias.",
    keywords: [
        "Transporte Pesado Angola",
        "Logística de Betume Luanda",
        "Transporte de Asfalto Angola",
        "Empresa de Logística Angola",
        "Infraestrutura Angola",
        "Camiões Cisterna Angola",
        "Apoio a Obras Públicas Angola",
        "TransBetume",
        "Logística Industrial Angola",
    ],
    address: {
        line1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "Kilamba, Quarteirão J7, apte nº 52",
        line2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 || "Luanda – Angola",
        city: "Luanda",
        country: "Angola",
    },
    contact: {
        phone: {
            main: process.env.NEXT_PUBLIC_PHONE_MAIN || "+244 923 659 774",
            secondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+244 923 659 775",
        },
        email: {
            geral: process.env.NEXT_PUBLIC_EMAIL_GERAL || "geral@transbetume.co.ao",
            comercial: process.env.NEXT_PUBLIC_EMAIL_COMERCIAL || "comercial@transbetume.co.ao",
            obras: process.env.NEXT_PUBLIC_EMAIL_OBRAS || "obras@transbetume.co.ao",
        },
    },
};
