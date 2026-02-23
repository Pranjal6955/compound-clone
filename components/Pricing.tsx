"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingCard = ({ plan, index }: { plan: any; index: number }) => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
                rotateY: isAnnual ? 180 : 0,
                scaleX: isAnnual ? -1 : 1,
                transition: { duration: 1.0, type: "spring", stiffness: 120, damping: 20 }
            }}
            className="bg-white rounded-[16px] p-[24px] flex flex-col relative w-[352px] h-[498.422px] mx-auto md:mx-0 box-border"
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
            }}
        >
            <div className={`relative w-full overflow-hidden flex flex-col ${plan.hasToggle ? "h-[75px]" : "h-auto"}`}>
                <div className="flex justify-between items-start mb-2">
                    <strong className="text-[12px] font-semibold text-[#108B4E] tracking-[-0.48px] leading-[14.4px] font-[family-name:var(--font-instrument-sans)] uppercase">
                        {plan.name}
                    </strong>
                    {plan.hasToggle && (
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-[#737373] min-w-[45px] text-right">
                                {isAnnual ? "Annual" : "Monthly"}
                            </span>
                            <div
                                className={`w-[40px] h-[24px] rounded-[100px] relative cursor-pointer transition-colors duration-200 ${isAnnual ? 'bg-[#009245]' : 'bg-[#EFEFEF]'}`}
                                onClick={() => setIsAnnual(!isAnnual)}
                            >
                                <motion.div
                                    animate={{ x: isAnnual ? 16 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="absolute left-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                    <h4 className="text-[28px] font-normal text-[#151515] leading-[30.8px] tracking-[-1.4px] font-[family-name:var(--font-instrument-sans)]">
                        {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </h4>
                    <span className="text-[16px] font-normal text-[#101010] leading-[20.8px] tracking-[-0.64px] font-[family-name:var(--font-instrument-sans)] whitespace-pre">/month</span>
                </div>
            </div>

            <div className="h-[40px] mb-8">
                {isAnnual && plan.hasToggle ? (
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-[13px] text-[#FF5733] line-through decoration-[1.5px]">{plan.originalYearlyTotal}</span>
                        <span className="text-[16px] font-normal text-[#101010] leading-[20.8px] tracking-[-0.64px] font-[family-name:var(--font-instrument-sans)] whitespace-pre">{plan.yearlyTotal} billed yearly</span>
                        <div className="bg-[#E6F9F0] text-[#10B981] text-[11px] font-medium px-2 py-0.5 rounded-full border border-[#10B981]/20 font-[family-name:var(--font-instrument-sans)]">
                            Save {plan.savings}
                        </div>
                    </div>
                ) : (
                    <p className={`text-[16px] font-normal text-[#101010] leading-[20.8px] tracking-[-0.64px] font-[family-name:var(--font-instrument-sans)] ${!plan.hasToggle ? "mt-6" : "mt-2"}`}>
                        {plan.description}
                    </p>
                )}
            </div>

            <button
                className={`w-full h-[40px] rounded-[12px] text-[16px] font-normal transition-all duration-200 mb-8 flex items-center justify-center ${plan.buttonVariant === "black"
                    ? "bg-[#151515] text-white hover:bg-black"
                    : "bg-[#009245] text-white hover:bg-[#007a3a]"
                    }`}
            >
                {isAnnual && plan.hasToggle ? "Go annual" : plan.buttonText}
            </button>

            <div className="space-y-4">
                {plan.features.map((feature: any, fIndex: number) => (
                    <div key={fIndex} className="flex items-center gap-3">
                        <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border ${feature.included
                                ? "bg-[#DCFCE7] border-[#22C55E]"
                                : "bg-transparent border-[#D4D4D4]"
                                }`}
                        >
                            {feature.included && (
                                <Check className="w-3 h-3 text-[#22C55E]" strokeWidth={3} />
                            )}
                        </div>
                        <span
                            className={`text-[13px] ${feature.included ? "text-[#404040]" : "text-[#A3A3A3]"}`}
                        >
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Pricing = () => {
    const plans = [
        {
            name: "FREE PLAN",
            monthlyPrice: "$0",
            yearlyPrice: "$0",
            description: "Billed never. Free forever.",
            buttonText: "Get started",
            buttonVariant: "black",
            features: [
                { text: "Lead management system", included: true },
                { text: "Email automation", included: true },
                { text: "Basic analytics dashboard", included: true },
                { text: "Customer support access", included: true },
                { text: "Customizable landing pages", included: false },
                { text: "Multi user access", included: false },
                { text: "Multi user access", included: false },
            ],
        },
        {
            name: "PRO PLAN",
            monthlyPrice: "$19.99",
            yearlyPrice: "$15.99",
            originalYearlyTotal: "$240",
            yearlyTotal: "$192",
            savings: "$48",
            description: "Billed monthly",
            buttonText: "Subscribe",
            buttonVariant: "green",
            hasToggle: true,
            features: [
                { text: "Lead management system", included: true },
                { text: "Email automation", included: true },
                { text: "Basic analytics dashboard", included: true },
                { text: "Customer support access", included: true },
                { text: "Customizable landing pages", included: true },
                { text: "Multi user access", included: true },
                { text: "Enterprise SSO", included: false },
            ],
        },
        {
            name: "ENTERPRISE PLAN",
            monthlyPrice: "$49.99",
            yearlyPrice: "$39.99",
            originalYearlyTotal: "$600",
            yearlyTotal: "$480",
            savings: "$120",
            description: "Billed monthly",
            buttonText: "Subscribe",
            buttonVariant: "green",
            hasToggle: true,
            features: [
                { text: "Lead management system", included: true },
                { text: "Email automation", included: true },
                { text: "Basic analytics dashboard", included: true },
                { text: "Customer support access", included: true },
                { text: "Customizable landing pages", included: true },
                { text: "Multi user access", included: true },
                { text: "Enterprise SSO", included: true },
            ],
        },
    ];

    return (
        <section
            id="pricing"
            className="relative flex flex-col items-center py-[80px] px-[24px] bg-[#f5f5f4] w-full min-h-[822.812px]"
        >
            <div className="w-full max-w-[1120px]">
                <div className="mb-12">
                    <h2 className="text-[44px] font-medium text-[#323232] leading-[52.8px] tracking-[-2.2px] mb-4 font-[family-name:var(--font-instrument-sans)]">
                        Our Pricing
                    </h2>
                    <p className="text-[20px] text-[#101010] font-normal leading-[26px] tracking-[-0.8px] font-[family-name:var(--font-instrument-sans)]">
                        Incredibly powerful, yet simply affordable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
