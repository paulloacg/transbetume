import { siteConfig } from "@/lib/site-config";

export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "image": `${siteConfig.url}/logotipo.png`,
        "@id": siteConfig.url,
        "url": siteConfig.url,
        "telephone": siteConfig.contact.phone.main,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address.line1,
            "addressLocality": siteConfig.address.city,
            "addressCountry": siteConfig.address.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -8.839988, // Example for Luanda
            "longitude": 13.289437
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        },
        "sameAs": [
            // Add social media links here if they exist
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
