"use client";

import React from "react";
import { Star, Play, Github, Settings, Smile, Infinity, Hexagon } from "lucide-react";

export default function CTA() {
    return (
        <section className="pb-2 pt-8 px-4 lg:px-0 w-full flex justify-center">
            {/* Main CTA Card */}
            {/* Main CTA Card */}
            <div
                className="w-full max-w-[1400px] bg-[rgb(255,251,245)] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-[80px] gap-12 lg:gap-16 lg:mx-auto relative overflow-hidden"
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0.180656px 0.301094px 1.75566px -1.08333px, rgba(0, 0, 0, 0.15) 0.68656px 1.14427px 6.67216px -2.16667px, rgba(0, 0, 0, 0.09) 3px 5px 29.1548px -3.25px"
                }}
            >

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start w-full lg:flex-1 text-center lg:text-left z-10">
                    {/* Badge */}
                    <div className="flex flex-col items-center lg:items-start mb-6 w-full max-w-[600px] h-auto relative">
                        <div className="flex items-center gap-0">
                            {/* Left Wreath */}
                            <img src="/leftleaf.png" alt="Left Leaf Wreath" className="w-[40px] h-[40px] md:w-[56px] md:h-[56px] object-contain block overflow-clip shrink-0" />

                            {/* Stars and Text Column Container */}
                            <div className="flex flex-col items-center gap-1 mx-0">
                                {/* Stars */}
                                <div className="flex justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#333333" className="text-[#333333] w-[14px] h-[14px] md:w-[16px] md:h-[16px]">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <p
                                    className="text-[13px] md:text-[15px] font-normal tracking-[-0.6px] leading-[18px] text-[rgb(16,16,16)] text-center lg:text-left m-0 p-0 block whitespace-pre"
                                    style={{ fontFamily: 'var(--font-fraunces), serif' }}
                                >
                                    Framer: Beginner to Pro
                                </p>
                            </div>

                            {/* Right Wreath */}
                            <img src="/rightleaf.png" alt="Right Leaf Wreath" className="w-[40px] h-[40px] md:w-[56px] md:h-[56px] object-contain block overflow-clip shrink-0" />
                        </div>
                    </div>

                    <h1
                        className="text-[32px] md:text-[42px] font-normal tracking-[-1.6px] md:tracking-[-2.1px] leading-[1.2] md:leading-[50.4px] text-[rgb(32,32,32)] text-center lg:text-left m-0 p-0 block w-full max-w-[600px] whitespace-pre-wrap mb-4"
                        style={{ fontFamily: 'var(--font-fraunces), serif' }}
                    >
                        Go beyond the template.<br />
                        Master Framer in weeks.
                    </h1>

                    <p
                        className="text-[18px] md:text-[20px] font-normal tracking-[-0.8px] md:tracking-[-1px] leading-relaxed md:leading-[28px] text-black text-center lg:text-left m-0 p-0 block w-full max-w-[600px] whitespace-pre-wrap mb-8"
                        style={{ fontFamily: 'Absans, "Absans Placeholder", sans-serif' }}
                    >
                        Go from a Framer beginner to a Pro in weeks with the most comprehensive course in the market.
                    </p>

                    <div
                        className="relative block m-0 p-0 w-[180px] md:w-[220px] h-[56px] md:h-[66px] origin-center"
                        style={{ transform: 'rotate(-3deg)' }}
                    >
                        {/* Offset Button Shadow */}
                        <div className="absolute inset-0 bg-[#FFD4C2] rounded-[24px] md:rounded-[32px] translate-y-2 translate-x-2 md:translate-x-3 -z-10" />
                        <button className="relative flex items-center justify-center bg-[#F25211] hover:bg-[#EB4A0A] transition-colors rounded-[24px] md:rounded-[32px] w-full h-full border-none outline-none cursor-pointer">
                            <p
                                className="text-[20px] md:text-[27px] font-normal leading-tight text-white m-0 p-0 block whitespace-pre"
                                style={{ fontFamily: 'var(--font-fraunces), serif' }}
                            >
                                Learn more
                            </p>
                        </button>
                    </div>
                </div>

                {/* Right Content - Video Section */}
                <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end z-10 pt-8 lg:pt-0">
                    <div
                        className="w-full max-w-[600px] aspect-video lg:aspect-[600/390] overflow-clip relative rounded-[28px] bg-transparent"
                    >
                        <video
                            className="w-full h-full object-cover rounded-[28px]"
                            src="/ctaVideo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-[rgb(255,84,0)] rounded-[100%] flex items-center justify-center overflow-hidden cursor-pointer pointer-events-auto hover:scale-105 transition-transform"
                                style={{
                                    boxShadow: 'rgba(0, 0, 0, 0.25) 2px -2px 5px 0px inset, rgba(0, 0, 0, 0.25) -2px 2px 4px 0px inset, rgba(0, 0, 0, 0.25) 0px 4px 5px 0px'
                                }}
                            >
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 md:ml-2 cursor-pointer inline w-[20px] h-[24px] md:w-[24px] md:h-[28px]">
                                    <path d="M22.5 12.268C23.8333 13.0378 23.8333 14.9622 22.5 15.732L3.00001 26.9904C1.66667 27.7602 0 26.798 0 25.2584L0 2.74163C0 1.20202 1.66667 0.239775 3.00001 1.00958L22.5 12.268Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
