"use client";

import { useState } from "react";

const tabs = ["Cart Rescue", "CLV Maximizer", "Deadstock AI", "Smart Pricing"];

interface FeatureCard {
    title: React.ReactNode;
    description: string;
    image: string;
}

const featureCards: FeatureCard[] = [
    {
        title: (
            <>
                Turn abandoned carts
                <br />
                into instant revenue
            </>
        ),
        description:
            "Compound's AI dissects abandonment patterns (device, payment errors, shipping hesitations) and triggers hyper-personalized recovery campaigns. Clients see 31% recovery rates by targeting root causes, not generic discounts.",
        image: "https://framerusercontent.com/images/92zyjxX9zrrcanJfJjhvN3vz0s.png",
    },
    {
        title: (
            <>
                Identify hidden VIPs
                <br />
                buying 3X more
            </>
        ),
        description:
            "Real-time scoring detects high-velocity buyers through purchase cadence, social advocacy, and service interactions. Automatically enrolls them in margin-boosting bundles and concierge offers – Proven 22% CLV lift.",
        image: "https://framerusercontent.com/images/dmzB6UCcpvyJEitigtg6ige3JI.png",
    },
    {
        title: (
            <>
                Liquidate slow-movers
                <br />
                before they tank margins
            </>
        ),
        description:
            "Machine learning predicts dying products using social sentiment decay and competitor shifts, then prescribes liquidation tactics. Users cut write-offs by 19% via flash sales and tax-optimized donations.",
        image: "https://framerusercontent.com/images/s0zLEuh1iQ7wqUGWC0rABPWJLQ.png",
    },
    {
        title: (
            <>
                Outprice competitors
                <br />
                without sacrificing margins
            </>
        ),
        description:
            "AI adjusts prices in real-time based on inventory turnover, competitor MAP violations, and customer sensitivity tiers. Clients achieve 14% margin lifts while maintaining brand price integrity.",
        image: "https://framerusercontent.com/images/mmDwVojjEFuNSSU4PktWqCiOut8.png",
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

export default function UseCases() {
    const [activeTab, setActiveTab] = useState(0);

    const handlePrev = () => {
        setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    };

    const feature = featureCards[activeTab];

    return (
        <>
            <section
                id="use-cases"
                className="relative flex flex-col items-center flex-none w-full overflow-hidden pt-[20px] pb-[80px] px-0 box-border"
                style={{ scrollMarginTop: 44 }}
            >
                <div className="w-full max-w-[1168px] px-6 flex flex-col gap-0">
                    {/* Heading */}
                    <div className="mb-4">
                        <h2 className="font-[family-name:var(--font-instrument-sans)] text-[32px] md:text-[44px] font-medium tracking-tight leading-[1.1] text-[#323232] text-left block m-0 p-0 box-border">
                            Unlock{" "}
                            <span className="font-medium not-italic text-[#108B4E] inline">
                                hidden profits
                            </span>{" "}
                            in your eCommerce data
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] md:text-[20px] font-normal tracking-tight leading-snug md:leading-7 text-[#101010] text-left block m-0 p-0 box-border mb-8 md:mb-12">
                        Turn customer insights into revenue-boosting actions with our powerful analytics suite.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6 md:gap-0">
                        {/* Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto w-full pb-2 md:pb-0 no-scrollbar">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        font-[family-name:var(--font-instrument-sans)] text-[14px] md:text-[16px] font-medium tracking-tight leading-tight
                                        px-4 md:px-6 py-2.5 md:py-3 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0
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
                        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                            <button
                                onClick={handlePrev}
                                className={`group w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border border-black bg-transparent hover:bg-black ${activeTab === 0 ? 'opacity-50' : 'opacity-100'}`}
                                aria-label="Previous tab"
                            >
                                <img src="/leftarrow.svg" alt="" className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] transition-all duration-200 group-hover:invert" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border border-black bg-transparent hover:bg-black"
                                aria-label="Next tab"
                            >
                                <img src="/rightarrow.svg" alt="" className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] transition-all duration-200 group-hover:invert" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Feature Cards Carousel — breaks out of max-width so the peeking card reaches the right edge */}
                <div className="overflow-hidden w-full pl-[max(24px,calc((100%-1168px)/2+24px))]">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            '--card-width': 'min(100vw - 48px, 940px)',
                            transform: `translateX(calc(-${activeTab} * (var(--card-width) + 24px)))`
                        } as React.CSSProperties}
                    >
                        {featureCards.map((card, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-[32px] border border-[#efefef] flex flex-col lg:flex-row items-start content-start gap-[20px] lg:gap-[40px] overflow-hidden shrink-0 box-border p-6 lg:pt-[80px] lg:pl-[80px] lg:pr-0 lg:pb-0"
                                style={{ width: 'var(--card-width)', minHeight: '520px' }}
                            >
                                {/* Left Content */}
                                <div className="relative flex flex-col items-start content-start gap-[20px] lg:gap-[24px] h-min overflow-visible p-0 box-border w-full lg:flex-1 lg:w-[1px]">
                                    <h3
                                        className="text-[28px] lg:text-[36px] font-normal tracking-[-0.05em] leading-[1.2em] text-left text-[rgb(50,50,50)] m-0 p-0"
                                        style={{
                                            fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif',
                                            fontVariationSettings: '"wdth" 100, "wght" 480',
                                            textWrap: 'balance',
                                        }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p
                                        className="text-[16px] lg:text-[20px] font-normal tracking-[-0.04em] leading-[1.3em] text-left text-[#101010] m-0 p-0"
                                        style={{
                                            fontFamily: '"Instrument Sans Variable", "Instrument Sans Placeholder", sans-serif',
                                            fontVariationSettings: '"wdth" 100, "wght" 440',
                                        }}
                                    >
                                        {card.description}
                                    </p>
                                </div>

                                {/* Right Image */}
                                <div className="w-full lg:flex-1 relative border-t-4 border-l-4 lg:border-l-4 lg:border-t-4 border-[#efefef] rounded-tl-[20px] rounded-tr-[20px] lg:rounded-tr-none overflow-hidden self-stretch h-[250px] lg:h-auto min-h-[200px]">
                                    <div className="absolute inset-0 rounded-[inherit]">
                                        <img
                                            src={card.image}
                                            alt=""
                                            className="block w-full h-full rounded-[inherit] object-cover box-border"
                                            style={{ objectPosition: 'left top' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Customers Love Us Section */}
            <section className="relative flex flex-col w-full max-w-[1168px] px-6 pt-16 md:pt-24 pb-8 mx-auto box-border">
                <div className="mb-12 md:mb-16">
                    <h2 className="font-[family-name:var(--font-instrument-sans)] text-[32px] md:text-[44px] font-medium tracking-[-1.6px] md:tracking-[-2.2px] leading-tight md:leading-[52.8px] text-[#323232] text-left block w-full max-w-[1120px] m-0 p-0 box-border">
                        Why our customers <span className="font-medium text-[#108B4E]">love us</span>
                    </h2>
                    <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] md:text-[20px] font-medium tracking-[-0.6px] md:tracking-[-0.8px] leading-snug md:leading-[26px] text-[rgb(16,16,16)] text-left block w-full max-w-[1120px] m-0 p-0 box-border mt-4">
                        It&apos;s not just about features. It&apos;s about making our customer&apos;s lives easier with the most intuitive analytics tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[32px] justify-items-start">
                    {whyChooseData.map((item, index) => (
                        <div key={index} className="relative bg-white rounded-[20px] p-8 md:p-[32px] flex flex-col gap-4 md:gap-6 w-full md:max-w-[352px] min-h-[auto] md:min-h-[300px] overflow-hidden box-border border border-[#efefef] shadow-sm">
                            <span className="font-[family-name:var(--font-instrument-sans)] text-[18px] md:text-[20px] font-normal tracking-[-0.8px] md:tracking-[-1px] leading-[24px] text-[#108B4E] inline whitespace-pre">
                                {item.number}
                            </span>
                            <div>
                                <h3 className="font-[family-name:var(--font-instrument-sans)] text-[18px] md:text-[20px] font-medium tracking-[-0.8px] md:tracking-[-1px] leading-[24px] text-black block w-full m-0 p-0 box-border">
                                    {item.title}
                                </h3>
                                <p className="font-[family-name:var(--font-instrument-sans)] text-[16px] md:text-[18px] font-normal tracking-[-0.4px] md:tracking-[-0.72px] leading-relaxed md:leading-[25.2px] text-[rgb(16,16,16)] block w-full m-0 p-0 box-border whitespace-pre-wrap break-words mt-4">
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
