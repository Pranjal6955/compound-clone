"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "How current is my data?",
        answer: "All dashboards update every 15 seconds using live data streams, eliminating the 24-48 hour delays of traditional platforms. You retain full access to raw, unsampled data for 36 months for compliance and trend analysis."
    },
    {
        question: "Does it work with Shopify/Klaviyo?",
        answer: "We offer one-click integrations with Shopify, Klaviyo, Recharge, and 85+ other tools. For custom stacks, our API documentation supports Python/JS SDKs with pre-built templates for common workflows."
    },
    {
        question: "How does pricing scale?",
        answer: "Unlike event-based pricing that penalizes growth, you pay 0.5% of tracked revenue (min $299/month). At $1M/month, you’d pay $5k – cheaper than Mixpanel’s $14k+ plans at this scale."
    },
    {
        question: "What about GDPR/CCPA?",
        answer: "Data from EU users is processed in Frankfurt/Germany servers with automated PII redaction. We generate compliance reports for audits and never sell/share data."
    },
    {
        question: "How accurate are predictions?",
        answer: "Our LTV forecasts achieve 94% precision across 12-month horizons, verified by third-party audits. Models retrain weekly using your latest data to adapt to market changes."
    },
    {
        question: "How is this better than GA4?",
        answer: "We focus exclusively on eCommerce profit metrics GA4 ignores – real-time margin tracking, inventory-aware pricing, and cookieless buyer identity graphs. Clients see 19-37% faster insights."
    }
];

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <React.Fragment>
            <section id="faq" className="bg-[rgb(245,245,244)] pt-[80px] pb-2 px-[24px] w-full flex justify-center font-sans relative">
                <div className="flex flex-col w-full lg:w-[1120px] max-w-[1120px]">
                    <div className="flex flex-col lg:flex-row w-full lg:h-fit min-h-[357.219px] m-0 p-0 relative gap-[40px] lg:gap-[80px] justify-between">

                        {/* Left Side */}
                        <div className="flex flex-col shrink-0 z-10 w-full lg:w-[407px]">
                            <h2
                                className="text-[36px] md:text-[44px] font-medium tracking-[-1.8px] md:tracking-[-2.2px] leading-tight md:leading-[52.8px] text-[rgb(50,50,50)] text-left m-0 p-0 mb-[15px] block w-full whitespace-pre-wrap"
                                style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                            >
                                FAQs
                            </h2>
                            <p
                                className="text-[18px] md:text-[20px] font-normal tracking-[-0.6px] md:tracking-[-0.8px] leading-snug md:leading-[26px] text-[rgb(16,16,16)] text-left m-0 p-0 block w-full mb-[32px] md:mb-[48px]"
                                style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                            >
                                Answers to some of the most frequently asked questions.
                            </p>
                            <p
                                className="text-[15px] md:text-[16px] font-normal tracking-[-0.64px] leading-relaxed md:leading-[20.8px] text-[rgb(16,16,16)] text-left m-0 p-0 block w-full whitespace-pre-wrap"
                                style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}
                            >
                                Have more questions? Reach out to our team via email -<br />
                                <a href="mailto:team@company.com" className="text-[rgb(16,16,16)] font-medium hover:opacity-80 transition-opacity">
                                    team@company.com
                                </a>
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col w-full lg:w-[570px] bg-[rgb(255,255,255)] rounded-[16px] p-6 md:p-[40px] overflow-hidden relative z-10 m-0 border-none shadow-none text-left font-sans text-black">
                            <div className="flex flex-col relative w-full h-fit m-0 p-0 overflow-visible gap-[25.2px]">
                                {faqs.map((faq, index) => {
                                    const num = String(index + 1).padStart(2, '0');
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={index} className="flex flex-col relative m-0 p-0 overflow-visible">
                                            <div
                                                className={`flex items-start md:items-center justify-between cursor-pointer group gap-4`}
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                            >
                                                <div className="flex items-start md:items-center gap-[14px] w-full m-0 p-0 relative cursor-pointer overflow-visible">
                                                    <span className="text-[#10B981] font-medium text-[16px] tabular-nums tracking-[-0.6px] leading-[1] shrink-0 mt-1 md:mt-0">{num}.</span>
                                                    <p
                                                        className="flex-1 m-0 p-0 overflow-visible cursor-pointer whitespace-pre-wrap break-words text-[16px] md:text-[18px] tracking-[-0.4px] md:tracking-[-0.6px] font-normal text-[#101010] text-left leading-snug md:leading-[1.2]"
                                                        style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}
                                                    >
                                                        {faq.question}
                                                    </p>
                                                </div>

                                                {/* Toggle Switch */}
                                                <div
                                                    className={`w-[44px] h-[24px] rounded-full p-[2px] flex items-center shrink-0 transition-colors duration-200 mt-0.5 md:mt-0 ${isOpen ? 'bg-[#10B981]' : 'bg-[#F2F2F2]'}`}
                                                >
                                                    <div
                                                        className={`w-[20px] h-[20px] rounded-full shadow-sm transition-transform duration-200 ${isOpen ? 'bg-white translate-x-[20px]' : 'bg-[#2A2A2A] translate-x-0'}`}
                                                    ></div>
                                                </div>
                                            </div>
                                            {/* Expanded Answer */}
                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pl-[38px] pb-4 pt-2">
                                                        <p
                                                            className="text-[14px] md:text-[16px] font-normal tracking-[-0.4px] md:tracking-[-0.64px] leading-relaxed md:leading-[20.8px] text-[#444444] text-left m-0 p-0 whitespace-pre-wrap break-words cursor-pointer"
                                                            style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}
                                                        >
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Tutorial Banner */}
                    <div
                        className="mx-auto mt-[80px] relative flex flex-col md:flex-row items-center justify-between bg-[rgb(21,21,21)] w-full max-w-[880px] min-h-[138px] p-4 rounded-[32px] md:rounded-[120px] overflow-visible"
                    >
                        {/* Text Container */}
                        <div
                            className="relative flex flex-col gap-[6px] justify-center text-center md:text-left px-6 py-6 md:pl-[60px] md:pr-32 w-full"
                        >
                            <h5
                                className="text-[20px] md:text-[24px] font-normal tracking-[-1px] md:tracking-[-1.2px] leading-tight md:leading-[26.4px] text-white m-0 p-0 block w-full"
                                style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                            >
                                Here is a tutorial to help you customize the template
                            </h5>
                            <p
                                className="text-[16px] md:text-[20px] font-normal tracking-[-0.6px] md:tracking-[-0.8px] leading-snug md:leading-[26px] text-white/80 m-0 p-0 block w-full"
                                style={{ fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif' }}
                            >
                                Step-by-step guide to customize this template your product.
                            </p>
                        </div>

                        {/* Video Container */}
                        <div className="relative md:absolute md:right-[4px] md:top-1/2 md:-translate-y-1/2 w-[100px] h-[100px] md:w-[130px] md:h-[130px] shrink-0 rounded-full overflow-hidden group cursor-pointer flex items-center justify-center z-10 mt-4 md:mt-0">
                            <video
                                src="/faqsVideo.mp4"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#10B981] rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-transform group-hover:scale-110">
                                    <svg width="12" height="14" viewBox="0 0 24 28" fill="none" className="ml-1 w-[10px] h-[12px] md:w-[12px] md:h-[14px]">
                                        <path d="M22.5 12.268C23.8333 13.0378 23.8333 14.9622 22.5 15.732L3.00001 26.9904C1.66667 27.7602 0 26.798 0 25.2584L0 2.74163C0 1.20202 1.66667 0.239775 3.00001 1.00958L22.5 12.268Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
}
