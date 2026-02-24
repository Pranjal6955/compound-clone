"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // navigation items
    // navigation items with their corresponding section IDs
    const navItems = [
        { label: "Features", href: "#features" },
        { label: "Use cases", href: "#use-cases" },
        { label: "Pricing", href: "#pricing" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQs", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent pt-2 px-4 font-sans antialiased">
            <div className="mx-auto flex h-[56px] w-full max-w-[606px] items-center justify-between rounded-[18px] bg-[#323232] pl-2 pr-2 shadow-sm">

                {/* Left: Logo */}
                <Link
                    href="/"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#1AB773] text-white shadow-sm transition-transform hover:scale-105 overflow-hidden"
                    aria-label="Home"
                >
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain h-full w-full" />
                </Link>

                {/* Middle: Desktop Links */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-[10px] px-3 py-2 text-[16px] font-light leading-[17.6px] tracking-[-0.64px] text-[#FFFFFF] font-[family-name:var(--font-instrument-sans)] transition-all hover:bg-white/10"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <X className="h-5 w-5" aria-hidden="true" />
                    ) : (
                        <Menu className="h-5 w-5" aria-hidden="true" />
                    )}
                </button>

                {/* Right: CTA */}
                <Link
                    href="#get-started"
                    className="hidden md:flex h-[40px] w-[117.5px] items-center justify-center rounded-[12px] bg-[#108B4E] px-[20px] text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] font-[family-name:var(--font-instrument-sans)] text-white transition-colors hover:bg-[#18A668]"
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.796192px 1.43315px -0.75px inset, rgba(0, 0, 0, 0.145) 0px -2.41451px 4.34611px -1.5px inset, rgba(0, 0, 0, 0.133) 0px -6.38265px 11.4888px -2.25px inset, rgba(0, 0, 0, 0.1) 0px -20px 36px -3px inset"
                    }}
                >
                    Get started
                </Link>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto max-w-sm rounded-3xl bg-[#323232] p-4 shadow-xl">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block rounded-[14px] px-4 py-3 text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] text-[#FFFFFF] font-[family-name:var(--font-instrument-sans)] hover:bg-white/10 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-2 pb-1 px-1">
                            <Link
                                href="#get-started"
                                className="flex w-full h-[40px] items-center justify-center rounded-[12px] bg-[#1FB567] px-[20px] text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] font-[family-name:var(--font-instrument-sans)] text-white transition-colors hover:bg-[#18A668]"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.796192px 1.43315px -0.75px inset, rgba(0, 0, 0, 0.145) 0px -2.41451px 4.34611px -1.5px inset, rgba(0, 0, 0, 0.133) 0px -6.38265px 11.4888px -2.25px inset, rgba(0, 0, 0, 0.1) 0px -20px 36px -3px inset"
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

