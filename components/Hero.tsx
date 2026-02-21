"use client";

import { useState, useRef } from "react";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
    const color = useTransform(progress, range, ["#D4D4D4", "#323232"]);
    return <motion.span style={{ color }}>{children}</motion.span>;
};



export default function Hero() {
    // State to track which dashboard image is currently in the front (0 = Sales, 1 = Churn, 2 = Views)
    const [frontIndex, setFrontIndex] = useState(0);

    const testimonialRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: testimonialRef,
        offset: ["0 0.9", "1 0.7"]
    });

    // The sequential array of dashboard images rendered in overlapping layers
    const images = [
        "/dashboard.png",
        "/Dashboard_Convert.png",
        "/Dashboard_zello.png"
    ];

    // Helper function to dynamically determine absolute positioning, shadow depth, and z-index.
    // This creates a 3D staggered layout where the focused index is placed at the front.
    const getLayerClasses = (index: number) => {
        if (index === frontIndex) {
            // Front
            return "absolute left-1/2 top-0 h-full w-full -translate-x-1/2 z-30 shadow-[0_20px_40px_rgba(0,0,0,0.1)] opacity-100";
        } else if (index === (frontIndex + 1) % 3) {
            // Middle
            return "absolute left-1/2 top-[-32px] h-full w-[95%] -translate-x-1/2 z-20 shadow-[0_10px_20px_rgba(0,0,0,0.05)] opacity-100";
        } else {
            // Back
            return "absolute left-1/2 top-[-64px] h-full w-[90%] -translate-x-1/2 z-10 shadow-sm opacity-100";
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-10 pb-12">
            <div className="relative inset-0 mx-auto flex h-auto w-full max-w-[1320px] flex-col items-center rounded-[32px] bg-[#FFFFFF] pt-[100px] px-[20px] pb-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#E5E5E5] overflow-hidden">

                {/* Text Content */}
                <div className="mx-auto text-center w-full max-w-[690px]">
                    <h1 className="mx-auto block h-auto md:h-[104px] w-full max-w-[690px] text-[44px] md:text-[52px] font-medium leading-[1.1] md:leading-[52px] tracking-[-2.6px] text-[#151515] font-[family-name:var(--font-instrument-sans)] text-center">
                        Compound is the AI-powered<br className="hidden md:block" /> analytics for eCommerce
                    </h1>
                    <p className="mx-auto mt-5 block h-auto md:h-[52px] w-full max-w-[490px] text-center text-[20px] font-normal leading-[26px] tracking-[-0.8px] text-[#101010] font-[family-name:var(--font-instrument-sans)]">
                        Compound identifies hidden revenue opportunities in<br className="hidden md:block" /> your customer data – from abandoned carts to VIP buyers.
                    </p>
                </div>

                {/* Action Buttons */}
                {/* Secondary wrap displaying primary call-to-action buttons (Get started / See Pricing) with complex inset shadows */}
                <div className="relative mt-8 mb-10 flex h-[40px] w-[250.422px] flex-row items-center justify-center gap-[15px] m-0 p-0 mx-auto">
                    <button className="flex h-full w-[117.5px] items-center justify-center rounded-[12px] bg-[#14A15A] text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] text-white transition-colors hover:bg-[#1CCB73] font-[family-name:var(--font-instrument-sans)]"
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.08) 0px -0.796192px 1.43315px -0.75px inset, rgba(0, 0, 0, 0.07) 0px -2.41451px 4.34611px -1.5px inset, rgba(0, 0, 0, 0.06) 0px -6.38265px 11.4888px -2.25px inset, rgba(0, 0, 0, 0.04) 0px -20px 36px -3px inset"
                        }}>
                        Get started
                    </button>
                    <button className="flex h-[40px] w-[116.875px] items-center justify-center rounded-[12px] bg-[#FFFFFF] px-[20px] text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] text-[#1A1A1A] transition-colors hover:bg-gray-50 font-[family-name:var(--font-instrument-sans)]"
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.796192px 1.43315px -0.75px inset, rgba(0, 0, 0, 0.145) 0px -2.41451px 4.34611px -1.5px inset, rgba(0, 0, 0, 0.133) 0px -6.38265px 11.4888px -2.25px inset, rgba(0, 0, 0, 0.1) 0px -20px 36px -3px inset"
                        }}>
                        See Pricing
                    </button>
                </div>

                {/* Dashboard Mockup Showcase */}
                <div className="relative mt-20 -mb-[100px] flex h-[756px] w-full max-w-[1200px] flex-col cursor-pointer justify-end">
                    {/* Ambient Shadow glow */}
                    <div className="absolute top-0 left-1/2 -z-10 h-full w-4/5 -translate-x-1/2 bg-gray-200/50 blur-[100px]" />

                    {images.map((src, index) => (
                        <div
                            key={src}
                            onClick={() => setFrontIndex(index)}
                            className={`flex flex-col justify-center items-center rounded-[20px] border border-gray-200 bg-white p-[10px] transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 ${getLayerClasses(index)}`}
                        >
                            <img src={src} alt={`Dashboard Layer ${index + 1}`} className="h-full w-full rounded-[10px] ring-1 ring-black/10 object-cover object-top shadow-sm" />
                        </div>
                    ))}
                </div>

                {/* Tab Navigation Menu */}
                {/* A frosted glass (glassmorphism) navigation bar mapping tab selections to their corresponding dashboard view slices */}
                <div
                    className={`absolute bottom-[5px] left-1/2 -translate-x-1/2 z-50 flex h-[52.7969px] w-[255.344px] items-center gap-[6px] p-[8px] transition-all duration-500 rounded-[16px] opacity-100 scale-100`}
                    style={{
                        backgroundColor: "rgba(153, 153, 153, 0.6)",
                        boxShadow: "rgba(0, 0, 0, 0.157) 0.301094px 0.301094px 1.78841px -1.08333px, rgba(0, 0, 0, 0.145) 1.14427px 1.14427px 6.7966px -2.16667px, rgba(0, 0, 0, 0.086) 5px 5px 29.6985px -3.25px",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    <button
                        onClick={() => setFrontIndex(0)}
                        className={`flex h-[36.7969px] w-[79.25px] items-center justify-center gap-[6px] rounded-[8px] py-[8px] pl-[6px] pr-[12px] text-[16px] font-normal leading-[20.8px] tracking-[-0.64px] text-[#151515] font-[family-name:var(--font-instrument-sans)] transition-all ${frontIndex === 0 ? 'bg-white shadow-sm hover:bg-gray-50' : 'bg-[#F5F5F4] hover:bg-white/50'}`}>
                        <TrendingUp className={`h-[14px] w-[14px] transition-colors ${frontIndex === 0 ? 'text-[#108B4E]' : 'text-[#666666]'}`} />
                        Sales
                    </button>
                    <button
                        onClick={() => setFrontIndex(1)}
                        className={`flex h-[36.7969px] w-[79.25px] items-center justify-center gap-[6px] rounded-[8px] py-[8px] pl-[6px] pr-[12px] text-[16px] font-normal leading-[20.8px] tracking-[-0.64px] text-[#151515] font-[family-name:var(--font-instrument-sans)] transition-all ${frontIndex === 1 ? 'bg-white shadow-sm hover:bg-gray-50' : 'bg-[#F5F5F4] hover:bg-white/50'}`}>
                        <TrendingDown className={`h-[14px] w-[14px] transition-colors ${frontIndex === 1 ? 'text-[#108B4E]' : 'text-[#666666]'}`} />
                        Churn
                    </button>
                    <button
                        onClick={() => setFrontIndex(2)}
                        className={`flex h-[36.7969px] w-[79.25px] items-center justify-center gap-[6px] rounded-[8px] py-[8px] pl-[6px] pr-[12px] text-[16px] font-normal leading-[20.8px] tracking-[-0.64px] text-[#151515] font-[family-name:var(--font-instrument-sans)] transition-all ${frontIndex === 2 ? 'bg-white shadow-sm hover:bg-gray-50' : 'bg-[#F5F5F4] hover:bg-white/50'}`}>
                        {/* Custom hand-coded SVG recreating the 'Views' bar-chart icon with thick rounded caps */}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-colors ${frontIndex === 2 ? 'text-[#108B4E]' : 'text-[#666666]'}`}
                            style={{ display: 'inline', verticalAlign: 'baseline', overflow: 'visible', backgroundColor: 'transparent' }}
                        >
                            <rect x="1" y="8" width="3" height="5" rx="1.5" />
                            <rect x="5.5" y="4" width="3" height="9" rx="1.5" />
                            <rect x="10" y="0" width="3" height="13" rx="1.5" />
                        </svg>
                        Views
                    </button>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="mx-auto mt-20 flex h-[246px] w-full max-w-[1120px] flex-col items-start justify-center px-[100px] font-[family-name:var(--font-instrument-sans)]">
                <blockquote ref={testimonialRef} className="text-[40px] font-medium italic leading-[52px] tracking-[-2px]">
                    {[
                        "\"Compound's AI uncovered $2.8M in hidden annual",
                        "revenue we'd been missing - their predictive",
                        "abandoned cart system alone boosted our bottom line",
                        "by 31% in 90 days.\""
                    ].map((line, lineIndex, linesArray) => {
                        const wordsInLine = line.split(" ");
                        let currentWordIndex = linesArray.slice(0, lineIndex).reduce((acc, l) => acc + l.split(" ").length, 0);

                        return (
                            <span key={lineIndex}>
                                {wordsInLine.map((word, wIndex) => {
                                    const stepIndex = currentWordIndex + wIndex;
                                    const start = stepIndex / 27;
                                    const end = (stepIndex + 1) / 27;
                                    return (
                                        <span key={wIndex}>
                                            <Word progress={scrollYProgress} range={[start, end]}>
                                                {word}
                                            </Word>
                                            {wIndex < wordsInLine.length - 1 && " "}
                                        </span>
                                    );
                                })}
                                {lineIndex < linesArray.length - 1 && <br className="hidden sm:block" />}
                                {lineIndex < linesArray.length - 1 && <span className="sm:hidden">{" "}</span>}
                            </span>
                        );
                    })}
                </blockquote>
                <div className="mt-5 text-[15px] sm:text-[16px] tracking-[-0.01em] text-[#151515]">
                    <span className="font-semibold">Jamie Rivera</span>, CEO of Luxe Threads
                </div>
            </div>
        </div>
    );
}
