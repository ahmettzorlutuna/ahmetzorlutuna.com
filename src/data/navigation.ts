import { NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/ahmetzorlutuna",
        icon: "github",
    },
    {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/ahmetzorlutuna",
        icon: "linkedin",
    },
    {
        platform: "42 Intra",
        url: "https://profile.intra.42.fr/users/azorlute",
        icon: "school",
    },
];
