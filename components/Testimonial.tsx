"use client";

import React from "react";
import { Heart } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const testimonials = [
    {
        name: "Emily R.",
        role: "Marketing Lead",
        avatar: "/Emily.png",
        content: "\"Compound's real-time analytics spotted seasonal demand shifts early, letting us adjust campaigns and capture 22% more sales. Their AI tools are now core to our strategy.\""
    },
    {
        name: "Carlos M.",
        role: "Founder @ Essentials",
        avatar: "/CarlosM.png",
        content: "\"We doubled our customer retention rate using Compound's segmentation insights, which revealed untapped upsell opportunities in our subscription model. Revenue soared!\""
    },
    {
        name: "Lena K.",
        role: "Marketing @ HomeDecor",
        avatar: "/LenaK.png",
        content: "\"In six months, Compound's AI-driven reports identified high-margin niches we'd overlooked. Result? A 20% YoY revenue jump and our best fiscal year yet.\""
    },
    {
        name: "Mark T.",
        role: "CEO @ Lifestyle Retial",
        avatar: "/MarkT.png",
        content: "\"By identifying underperforming product categories and suggesting pricing optimizations, Compound helped us tap into $500K+ in annual recurring revenue. A game-changer for scaling!\""
    },
    {
        name: "Sophia L.",
        role: "E-commerce Director",
        avatar: "/Shobhpia.png",
        content: "\"Compound's AI-powered analytics uncovered cross-selling opportunities we never noticed, directly contributing to a 30% revenue boost last quarter. It's transformed how we approach customer data.\""
    },
    {
        name: "Raj P.",
        role: "COO @ FashionHub",
        avatar: "/RajP.png",
        content: "\"The predictive insights from Compound's platform allowed us to pivot our inventory strategy, opening three new revenue streams in international markets. Our growth this year? Unmatched.\""
    }
];

// Duplicate the array to create a seamless infinite loop length. 
// 3 sets is enough to cover wider screens seamlessly (left offscreen, visible, right offscreen).
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

const QuoteIcon = () => (
    <div className="w-[18px] h-[18px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    </div>
);

const TestimonialCard = ({ t, index, baseX }: { t: any, index: number, baseX: any }) => {
    // A single card's fixed step (width + gap)
    const step = 316; // width 300 + gap 16

    // Each card's X position is exactly its index multiple, offset by the global baseX.
    // Subtracting `1 * 6 * step` (1896px) shifts the strip left to start the middle set on screen.
    const x = useTransform(baseX, (v: number) => {
        return v + (index * step) - 1896;
    });

    // Distance in steps from the horizontal center (x = 0)
    const distance = useTransform(x, (xVal: number) => xVal / step);

    // Alternating tilt: even items tilt one way, odd items tilt the other way.
    const rotate = index % 2 === 0 ? 2.5 : -2.5;

    return (
        <motion.div
            style={{ x, rotate, transformOrigin: "center center" }}
            className="absolute top-1/2 -mt-[200px] left-1/2 -ml-[150px] flex flex-col overflow-hidden w-[300px] h-[400px] min-h-[400px] min-w-0 bg-white rounded-[16px] p-[24px] font-sans text-[12px] font-normal text-black text-start m-0 border-0 box-border shrink-0 list-none"
        >
            <div className="flex items-center gap-[14px] mb-6">
                <div className="w-[42px] h-[42px] rounded-full overflow-hidden bg-[#34ac79] shrink-0">
                    <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p
                        className="text-[16px] font-normal tracking-[-0.64px] leading-[17.6px] text-left text-[rgb(21,21,21)] w-[192px] h-[17.5938px] m-0 p-0 block static whitespace-pre-wrap break-words"
                        style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                    >
                        {t.name}
                    </p>
                    <p
                        className="text-[16px] font-normal tracking-[-0.64px] leading-[20.8px] text-left text-[rgb(16,16,16)] w-[192px] h-[20.7969px] m-0 p-0 block static whitespace-pre-wrap break-words"
                        style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}
                    >
                        {t.role}
                    </p>
                </div>
            </div>

            <p
                className="text-[20px] font-normal tracking-[-0.8px] leading-[26px] text-left text-[rgb(16,16,16)] w-[252px] h-[182px] m-0 p-0 block static whitespace-pre-wrap break-words"
                style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
            >
                {t.content}
            </p>

            <div className="mt-auto flex items-center gap-[6px]">
                <Heart className="w-[18px] h-[18px] fill-[#F04438] text-[#F04438]" />
                <QuoteIcon />
            </div>
        </motion.div>
    );
};

export default function Testimonial() {
    // Global scrolling coordinate
    const baseX = useMotionValue(0);

    useAnimationFrame((time, delta) => {
        // Move cards automatically towards the left
        const speed = 40; // Pixels per second
        const moveBy = (speed * delta) / 1000;
        let newX = baseX.get() - moveBy;

        // When baseX completes a single set width (6 items * 316px = 1896px), snap it back
        if (newX <= -1896) {
            newX += 1896;
        }
        baseX.set(newX);
    });

    return (
        <section id="reviews" className="relative bg-[#F5F5F4] pt-8 md:pt-16 pb-12 md:pb-32 w-full overflow-hidden flex flex-col items-center">
            <header className="relative flex flex-col items-center justify-center place-content-center flex-none gap-4 h-min overflow-hidden p-0 w-full box-border mb-4 z-10">
                <h2
                    className="text-[32px] md:text-[44px] font-normal tracking-[-1.6px] md:tracking-[-2.2px] leading-tight md:leading-[52.8px] text-left text-[rgb(50,50,50)] w-full max-w-[1112px] px-6 h-auto m-0 p-0 block static box-border"
                    style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                >
                    Customer Testimonials
                </h2>

                <p
                    className="text-[16px] sm:text-[20px] font-medium tracking-[-0.8px] leading-[1.4] sm:leading-[26px] text-left text-[rgb(16,16,16)] w-full max-w-[1112px] px-6 h-auto m-0 p-0 block static "
                    style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                >
                    See what our customers say about our product.
                </p>
            </header>

            <div className="relative w-full max-w-[1400px] h-[480px] flex justify-center items-start mt-8 pointer-events-none">
                {allTestimonials.map((t, index) => (
                    <TestimonialCard key={index} t={t} index={index} baseX={baseX} />
                ))}
            </div>

            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-[200px] z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #F5F5F4, transparent)' }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-[200px] z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #F5F5F4, transparent)' }} />
        </section>
    );
}
