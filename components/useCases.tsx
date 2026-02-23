"use client";

import { useState } from "react";

const tabs = ["Cart Rescue", "CLV Maximizer", "Deadstock AI", "Smart Pricing"];

interface TabContent {
    leftTitle: React.ReactNode;
    leftDescription: string;
    rightTitle: React.ReactNode;
    rightDescription: string;
}

const tabContents: TabContent[] = [
    {
        leftTitle: (
            <>
                Turn abandoned carts
                <br />
                into instant revenue
            </>
        ),
        leftDescription:
            "Compound's AI dissects abandonment patterns (device, payment errors, shipping hesitations) and triggers hyper-personalized recovery campaigns. Clients see 31% recovery rates by targeting root causes, not generic discounts.",
        rightTitle: (
            <>
                Identify hidden VIPs
                <br />
                buying 3X more
            </>
        ),
        rightDescription:
            "Real-time scoring detects high-velocity buyers through purchase cadence, social advocacy, and service interactions. Automatically enrolls them in margin-boosting bundles and concierge offers – Proven 22% CLV lift.",
    },
    {
        leftTitle: (
            <>
                Maximize customer
                <br />
                lifetime value
            </>
        ),
        leftDescription:
            "AI-powered segmentation identifies high-potential customers and recommends personalized retention strategies. Increase repeat purchase rates by 45% with predictive churn modeling and automated win-back campaigns.",
        rightTitle: (
            <>
                Predict next-best
                <br />
                offers in real-time
            </>
        ),
        rightDescription:
            "Dynamic recommendation engine analyzes purchase history, browsing behavior, and seasonal trends to surface the perfect offer at the perfect time – driving 28% higher average order values.",
    },
    {
        leftTitle: (
            <>
                Eliminate deadstock
                <br />
                before it happens
            </>
        ),
        leftDescription:
            "Predictive inventory analytics flag slow-moving SKUs 30 days before they become deadstock. AI suggests markdown strategies, bundle opportunities, and channel reallocation to recover 89% of at-risk inventory value.",
        rightTitle: (
            <>
                Smart liquidation
                <br />
                at peak margins
            </>
        ),
        rightDescription:
            "Automated clearance engine optimizes markdown timing and depth across channels. Machine learning ensures maximum recovery rates while protecting brand perception – averaging 34% higher clearance margins.",
    },
    {
        leftTitle: (
            <>
                Outprice competitors
                <br />
                without sacrificing margins
            </>
        ),
        leftDescription:
            "AI adjusts prices in real-time based on inventory turnover, competitor MAP violations, and customer sensitivity tiers. Clients achieve 14% margin lifts while maintaining brand price integrity.",
        rightTitle: (
            <>
                Dynamic pricing
                <br />
                across all channels
            </>
        ),
        rightDescription:
            "Unified pricing engine ensures consistency across marketplaces, DTC, and wholesale while optimizing for each channel's unique demand curves. Reduce pricing errors by 92% with automated rule enforcement.",
    },
];

const whyChooseData = [
    {
        number: "01.",
        title: "Real-time profit mapping",
        description: "Compound's AI continuously analyzes purchase patterns and inventory flow across all sales channels. This enables dynamic margin optimization that automatically adjusts to market shifts."
    },
    {
        number: "02.",
        title: "Dynamic segmentation engine",
        description: "Self-optimizing clusters group customers by real-time behavior rather than static demographics. This reveals high-value segments like \"Weekend Luxury Browsers\"."
    },
    {
        number: "03.",
        title: "Adaptive learning loops",
        description: "The system evolves alongside business needs through continuous feedback integration. Teams maintain control via customizable metrics and manual overrides."
    },
    {
        number: "04.",
        title: "Predictive customer DNA",
        description: "Machine learning profiles individual buyer behavior to forecast lifetime value with 94% accuracy. These insights power retention strategies before churn risks emerge."
    },
    {
        number: "05.",
        title: "Contextual personalization",
        description: "The contents and certain metadata (including title, time created, and last modified date) associated with every document created or uploaded by a user is only visible to the user or shared collaborators."
    },
    {
        number: "06.",
        title: "Collaborative intelligence",
        description: "Compound combines specialized AI modules into a unified decision engine. This holistic approach outperforms single-model systems by 28% in revenue impact."
    }
];



const StatisticChart = () => {
    return (
        <div className="bg-white rounded-[24px] border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 md:p-8 w-full max-w-[500px] h-full flex flex-col">
            <div className="mb-6">
                <h4 className="font-[family-name:var(--font-instrument-sans)] text-[18px] font-semibold text-[#1a1a1a] tracking-tight">Statistic</h4>
                <p className="font-[family-name:var(--font-instrument-sans)] text-[14px] text-[#888]">Income and Expenses</p>
            </div>

            <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f5f0ff] flex items-center justify-center shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-[family-name:var(--font-instrument-sans)] text-[12px] text-[#888] mb-0.5">Income</p>
                        <div className="flex items-center gap-2">
                            <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-semibold text-[#1a1a1a]">Expenses</p>
                            <span className="text-[12px] font-medium text-[#10b981] flex items-center gap-0.5">
                                10%
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M18 15l-6-6-6 6" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fff5f0] flex items-center justify-center shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-[family-name:var(--font-instrument-sans)] text-[12px] text-[#888] mb-0.5">Expenses</p>
                        <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-semibold text-[#1a1a1a]">$18,1...</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative mt-2 min-h-[220px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-[#ccc] pr-4">
                    <span>$1.2k</span>
                    <span>$1k</span>
                    <span>$800</span>
                    <span>$600</span>
                    <span>$400</span>
                    <span>$200</span>
                    <span>0</span>
                </div>

                <div className="ml-10 h-full flex flex-col justify-between relative pb-6">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-full border-t border-[#f0f0f0] border-dashed h-0" />
                    ))}

                    {/* The Chart Lines - simplified curves */}
                    <svg className="absolute inset-0 w-full h-[calc(100%-24px)] overflow-visible" preserveAspectRatio="none">
                        {/* Purple line */}
                        <path
                            d="M 0 100 C 50 110, 80 60, 120 70 C 160 80, 200 40, 240 60 C 280 80, 320 70, 360 75"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                        {/* Orange line */}
                        <path
                            d="M 0 130 C 50 135, 80 120, 120 130 C 160 110, 200 140, 240 120 C 280 130, 320 135, 360 132"
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* X-axis labels */}
                <div className="ml-10 mt-[-10px] flex justify-between text-[11px] text-[#ccc]">
                    {["Lbl", "Lbl", "Lbl", "Lbl", "Lbl", "Lbl"].map((l, i) => (
                        <span key={i}>{l}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function UseCases() {
    const [activeTab, setActiveTab] = useState(0);

    const handlePrev = () => {
        setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    };

    const content = tabContents[activeTab];

    return (
        <>
            <section className="relative flex flex-col w-full max-w-[1168px] px-6 py-20 mx-auto box-border overflow-hidden">
                {/* Heading */}
                <div className="mb-4">
                    <h2 className="font-[family-name:var(--font-instrument-sans)] text-[44px] font-medium tracking-tight leading-[1.1] text-[#323232] text-left block m-0 p-0 box-border">
                        Unlock{" "}
                        <span className="font-medium not-italic text-[#108B4E] inline">
                            hidden profits
                        </span>{" "}
                        in your eCommerce data
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-normal tracking-tight leading-7 text-[#101010] text-left block m-0 p-0 box-border mb-12">
                    Turn customer insights into revenue-boosting actions with our powerful analytics suite.
                </p>

                {/* Tab Navigation */}
                <div className="flex items-center justify-between mb-8">
                    {/* Tabs */}
                    <div className="flex items-center gap-1">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    font-[family-name:var(--font-instrument-sans)] text-[16px] font-medium tracking-tight leading-tight
                                    px-6 py-3 transition-all duration-300 cursor-pointer
                                    ${activeTab === index
                                        ? "bg-white text-[#151515] rounded-xl shadow-sm border border-[#efefef]"
                                        : "text-[#888] hover:text-[#333] bg-transparent border border-transparent"
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Arrow Navigation */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#ececeb] transition-colors cursor-pointer bg-[#efefef]"
                            aria-label="Previous tab"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#ececeb] transition-colors cursor-pointer bg-[#efefef]"
                            aria-label="Next tab"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-[40px] p-10 md:p-16 lg:p-20 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#efefef] flex flex-col lg:flex-row items-center gap-16 min-h-[580px]">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <h3 className="font-[family-name:var(--font-instrument-sans)] text-[40px] md:text-[48px] font-medium tracking-tight leading-[1.1] text-[#1a1a1a]">
                            {content.leftTitle}
                        </h3>
                        <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] font-normal tracking-tight leading-relaxed text-[#555] max-w-[500px]">
                            {content.leftDescription}
                        </p>
                    </div>

                    {/* Right Content - Chart */}
                    <div className="flex-1 w-full lg:h-[420px] flex items-center justify-center lg:justify-end">
                        <StatisticChart />
                    </div>
                </div>
            </section>

            {/* Why Our Customers Love Us Section */}
            <section className="relative flex flex-col w-full max-w-[1168px] px-6 py-24 mx-auto box-border">
                <div className="mb-16">
                    <h2 className="font-[family-name:var(--font-instrument-sans)] text-[44px] font-medium tracking-[-2.2px] leading-[52.8px] text-[#323232] text-left block w-[1120px] max-w-full m-0 p-0 box-border">
                        Why our customers <span className="font-medium text-[#108B4E]">love us</span>
                    </h2>
                    <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-medium tracking-[-0.8px] leading-[26px] text-[rgb(16,16,16)] text-left block w-[1120px] max-w-full m-0 p-0 box-border mt-4">
                        It&apos;s not just about features. It&apos;s about making our customer&apos;s lives easier with the most intuitive analytics tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-items-start">
                    {whyChooseData.map((item, index) => (
                        <div key={index} className="relative bg-white rounded-[20px] p-[32px] flex flex-col gap-6 w-full max-w-[352px] min-h-[300px] overflow-hidden box-border">
                            <span className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-normal tracking-[-1px] leading-[24px] text-[#108B4E] inline whitespace-pre">
                                {item.number}
                            </span>
                            <div>
                                <h3 className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-medium tracking-[-1px] leading-[24px] text-black block w-[288px] max-w-full m-0 p-0 box-border">
                                    {item.title}
                                </h3>
                                <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] font-normal tracking-[-0.72px] leading-[25.2px] text-[rgb(16,16,16)] block w-[288px] max-w-full m-0 p-0 box-border whitespace-pre-wrap break-words mt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
