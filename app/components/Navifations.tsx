"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Briefcase, Code, Mail, GraduationCap } from "lucide-react";

interface NavLinkProps {
    href: string;
    icon: ReactNode;
    isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, isActive = false }) => {
    // Handle smooth scrolling client-side
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`p-2 rounded-md transition-all ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
        >
            {icon}
        </Link>
    );
};

export default function Navigation() {
    const pathname = usePathname();
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    return (
        <div className="container max-w-4xl mx-auto flex justify-around items-center">
            <NavLink
                href="#home"
                icon={<Home />}
                isActive={hash === "#home"}
            />
            <NavLink
                href="#projects"
                icon={<Briefcase />}
                isActive={hash === "#projects"}
            />
            <NavLink
                href="#skills"
                icon={<Code />}
                isActive={hash === "#skills"}
            />
            <NavLink
                href="#experience"
                icon={<Briefcase />}
                isActive={hash === "#experience"}
            />
            <NavLink
                href="#education"
                icon={<GraduationCap />}
                isActive={hash === "#education"}
            />
            <NavLink
                href="#contact"
                icon={<Mail />}
                isActive={hash === "#contact"}
            />
        </div>
    );
}