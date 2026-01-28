export const siteConfig = {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "TRANSBETUME",
    nif: process.env.NEXT_PUBLIC_COMPANY_NIF || "5001267264",
    address: {
        line1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "Kilamba, Quarteirão J7, apte nº 52",
        line2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 || "Luanda – Angola",
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
