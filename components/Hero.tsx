"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart2 } from "lucide-react";



export default function Hero() {
    const [frontIndex, setFrontIndex] = useState(0);

    const images = [
        "/Dashboard_Convert.png",
        "/Dashboard_zello.png",
        "/dashboard.png"
    ];

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
                <div className="relative mt-8 mb-10 flex h-[40px] w-[250.422px] flex-row items-center justify-center gap-[15px] m-0 p-0 mx-auto">
                    <button className="flex h-full w-[117.5px] items-center justify-center rounded-[12px] bg-[#108B4E] text-[16px] font-normal leading-[17.6px] tracking-[-0.64px] text-white transition-colors hover:bg-[#18A668] font-[family-name:var(--font-instrument-sans)]"
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.796192px 1.43315px -0.75px inset, rgba(0, 0, 0, 0.145) 0px -2.41451px 4.34611px -1.5px inset, rgba(0, 0, 0, 0.133) 0px -6.38265px 11.4888px -2.25px inset, rgba(0, 0, 0, 0.1) 0px -20px 36px -3px inset"
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
                <div className="relative mt-20 flex h-[756px] w-full max-w-[1200px] flex-col cursor-pointer">
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

                    {/* Overlay Floating Buttons specifically for the main dashboard (index 0) */}
                    <div className={`absolute bottom-[16%] left-1/2 -translate-x-1/2 z-50 flex items-center gap-[6px] rounded-[14px] bg-[#E8E8E8]/80 p-[6px] shadow-[0_8px_16px_rgba(0,0,0,0.1)] ring-4 ring-white backdrop-blur-md transition-all duration-500 ${frontIndex === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <button className="flex items-center gap-[6px] rounded-[10px] bg-white px-3 py-[6px] text-[13px] font-medium text-[#333333] shadow-sm ring-1 ring-black/5 transition-all hover:bg-gray-50">
                            <TrendingUp className="h-[14px] w-[14px] text-[#108B4E]" />
                            Sales
                        </button>
                        <button className="flex items-center gap-[6px] rounded-[10px] bg-white px-3 py-[6px] text-[13px] font-medium text-[#666666] shadow-sm ring-1 ring-black/5 transition-all hover:bg-gray-50">
                            <TrendingDown className="h-[14px] w-[14px] text-[#24D164]" />
                            Churn
                        </button>
                        <button className="flex items-center gap-[6px] rounded-[10px] bg-white px-3 py-[6px] text-[13px] font-medium text-[#666666] shadow-sm ring-1 ring-black/5 transition-all hover:bg-gray-50">
                            <BarChart2 className="h-[14px] w-[14px] text-gray-400" />
                            Views
                        </button>
                    </div>

                    {/* Dashboard Fade to Testimonial */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#F9FAFB] z-40 pointer-events-none" />
                </div>

                {/* Testimonial Section */}
                <div className="w-[calc(100%+40px)] -mx-[20px] bg-[#F9FAFB] py-24 flex flex-col items-center justify-center font-[family-name:var(--font-instrument-sans)] relative z-50">
                    <div className="max-w-[1000px] mx-auto text-center px-4 flex flex-col items-center">
                        {/* Testimonial content removed as requested */}
                    </div>
                </div>
            </div>
        </div>
    );
}
