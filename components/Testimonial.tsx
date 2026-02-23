"use client";

import React from "react";
import { Heart } from "lucide-react";

const testimonials = [
    {
        name: "Alex M.",
        role: "Lifestyle Retail",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        content: "\"By integrating this matching product and suggesting visualizations, it's helped us tap into massive residual recurring revenue. A game-changer for our team.\""
    },
    {
        name: "Sophia L.",
        role: "E-commerce Director",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "\"Compound's AI-powered analytics uncovered cross-selling opportunities we never noticed, directly contributing to a 30% revenue boost last quarter. It's transformed how we approach customer data.\""
    },
    {
        name: "Raj P.",
        role: "COO @ FashionHub",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "\"The predictive insights from Compound's platform allowed us to pivot our inventory strategy, opening three new revenue streams in international markets. Our growth this year? Unmatched.\""
    },
    {
        name: "Emily R.",
        role: "Marketing Lead",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "\"Compound's real-time analytics spotted seasonal demand shifts early, letting us adjust campaigns and capture 22% more sales. Their AI tools are now core to our strategy.\""
    },
    {
        name: "Carlos M.",
        role: "Founder @ Essentials",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        content: "\"We doubled our customer retention rate using Compound's segmentation insights, which revealed untapped upsell opportunities in our subscription model. Revenue soared!\""
    },
    {
        name: "Lena K.",
        role: "Marketing @ HomeDecor",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        content: "\"In six months, Compound's AI-driven reports identified high-margin niches we'd overlooked. Result? A 20% YoY revenue jump and our best fiscal year yet.\""
    },
    {
        name: "Mark T.",
        role: "CEO",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        content: "\"By identifying underperforming categories and pricing optimization, Compound saved $500K+ in annual revenue. A game-changer for scaling!\""
    }
];

const QuoteIcon = () => (
    <div className="w-[18px] h-[18px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    </div>
);

export default function Testimonial() {
    return (
        <section className="bg-[#F5F5F4] pt-24 sm:pt-32 pb-8 sm:pb-12 w-full overflow-hidden flex flex-col items-center">
            <div className="text-center px-4 max-w-3xl mx-auto mb-20 relative z-10">
                <h2 className="text-[40px] md:text-[44px] leading-[1.1] font-medium tracking-tight text-[#171717] mb-[18px]">
                    Customer Testimonials
                </h2>
                <p className="text-[17px] text-[#424242]">
                    See what our customers say about our product.
                </p>
            </div>

            {/* Cards container: fixed height to handle the translateY of the outer cards */}
            <div className="relative w-full max-w-[1400px] h-[480px] flex justify-center items-start">
                {/* We use width max-content, center it absolutely, to allow negative translations and wide flex without viewport scrollbars */}
                <div className="flex justify-center items-start gap-6 absolute top-0 left-1/2 -translate-x-1/2 w-max px-8">
                    {testimonials.map((t, index) => {
                        const center = 3;
                        const distance = index - center; // -3, -2, -1, 0, 1, 2, 3

                        // Adjust the multiplier for more or less curve
                        const rotate = distance * 4;
                        const translateY = distance * distance * 12;

                        return (
                            <div
                                key={index}
                                className="w-[340px] shrink-0 bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#F2F2F2] flex flex-col"
                                style={{
                                    transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                                    transformOrigin: "center top",
                                }}
                            >
                                <div className="flex items-center gap-[14px] mb-6">
                                    <div className="w-[42px] h-[42px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-[14px] font-semibold text-[#171717] leading-tight">
                                            {t.name}
                                        </h4>
                                        <span className="text-[13px] text-[#666666] leading-tight mt-[4px]">
                                            {t.role}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-[15px] leading-[1.6] text-[#424242] mb-8 font-normal">
                                    {t.content}
                                </p>

                                <div className="mt-auto flex items-center gap-[6px]">
                                    <Heart className="w-[18px] h-[18px] fill-[#F04438] text-[#F04438]" />
                                    <QuoteIcon />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
