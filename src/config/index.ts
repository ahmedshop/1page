import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Qr Food - Revolutionize Your Restaurant Experience",
        template: `%s | Qr Food`
    },
    description: "Qr Food empowers restaurant owners to easily create and manage digital menus and QR codes. Elevate your dining experience with a seamless, user-friendly dashboard.",
    icons: {
        icon: [
            {
                url: "/icons/icon.png",
                href: "/icons/icon.png",
            }
        ]
    },
    openGraph: {
        title: "Qr Food - Revolutionize Your Restaurant Experience",
        description: "Create and manage digital menus and QR codes effortlessly. Qr Food simplifies menu management for restaurant owners with an intuitive dashboard.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Qr Food - Revolutionize Your Restaurant Experience",
        description: "Qr Food makes it easy for restaurant owners to create digital menus and QR codes, offering a smooth and modern dining experience.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("http://localhost:3000"),
};
