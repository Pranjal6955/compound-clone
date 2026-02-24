import Image from "next/image";

const featuresData = [
    {
        title: <>Turn abandoned carts<br />into instant revenue</>,
        description: "Compound's AI dissects abandonment patterns (device, payment errors, shipping hesitations) and triggers hyper-personalized recovery campaigns. Clients see 31% recovery rates by targeting root causes, not generic discounts.",
        imageSrc: "/feature1image.png",
        bgImage: "https://framerusercontent.com/images/tlgwGSHY6Q6jC8AMiaCGygCWsE.jpg?scale-down-to=1024",
        alt: "Dashboard",
    },
    {
        title: <>Identify hidden VIPs<br />buying 3X more</>,
        description: "Real-time scoring detects high-velocity buyers through purchase cadence, social advocacy, and service interactions. Automatically enrolls them in margin-boosting bundles and concierge offers – Proven 22% CLV lift.",
        imageSrc: "/feature2image.png",
        bgImage: "https://framerusercontent.com/images/pOHdHBra9LpoTrE3Ep0k6KLtz1Y.jpg?scale-down-to=1024",
        alt: "Seller Details Dashboard",
    },
    {
        title: <>Outprice competitors<br />without sacrificing margins</>,
        description: "AI adjusts prices in real-time based on inventory turnover, competitor MAP violations, and customer sensitivity tiers. Clients achieve 14% margin lifts while maintaining brand price integrity.",
        imageSrc: "/feature3image.png",
        bgImage: "https://framerusercontent.com/images/VQGatiM7g7ldkW8pmGdYnZYnOU.jpg?scale-down-to=1024",
        alt: "Product Management Dashboard",
    },
];

const comparisonData = {
    traditional: [
        "Static reports with 24h+ delays",
        "Sampled data (10M event caps)",
        "Black box insights",
        "Manual cohort building",
        "Cookie-dependent tracking",
        "Rigid dashboards",
        "Bot-inflated engagement metrics",
        "8-hour data delays",
        "Cost spikes at scale",
        "Fragmented data lakes",
    ],
    compound: [
        "Real-time profit mapping",
        "Unlimited event processing",
        "Transparent AI reasoning",
        "Auto-optimized segments",
        "Privacy-first identity stitching",
        "Collaborative analytics playground",
        "AI-powered bot filtering",
        "Live margin tracking",
        "Usage-based scaling",
        "Unified data lakehouse",
    ]
};

export default function Features() {
    return (
        <section id="features" className="pt-24 pb-30 px-6 lg:px-0 w-full max-w-[1120px] mx-auto">
            <div className="mb-12 md:mb-16">
                <h2 className="font-[family-name:var(--font-instrument-sans)] text-[32px] md:text-[44px] font-medium tracking-tight leading-tight text-[#323232] text-left mb-4">
                    Product Features
                </h2>
                <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] md:text-[20px] font-normal tracking-tight leading-relaxed md:leading-7 text-[#101010] text-left">
                    Compound is changing the game in the analytics world and traditional tools don&apos;t even come close.
                </p>
            </div>

            <div className="relative pb-[40px] flex flex-col gap-[128px]">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="font-sans text-[12px] font-normal text-start whitespace-normal bg-white text-black w-full max-w-[1120px] lg:h-[543px] p-8 lg:p-[60px] sticky top-[100px] flex overflow-hidden rounded-[32px] flex-col lg:flex-row items-center gap-8 lg:gap-24 shadow-[0_-1px_3px_rgba(0,0,0,0.05),0_-10px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.05]"
                        style={{ zIndex: index + 1 }}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-4 lg:space-y-6">
                            <h3 className="font-[family-name:var(--font-instrument-sans)] text-[28px] lg:text-[36px] font-medium tracking-[-1.8px] leading-[1.2] lg:leading-[43.2px] text-[#323232] whitespace-pre-wrap break-words text-left">
                                {feature.title}
                            </h3>
                            <p className="font-[family-name:var(--font-instrument-sans)] text-[16px] lg:text-[18px] font-normal tracking-[-0.72px] leading-[1.4] lg:leading-[25.2px] text-[#101010] text-left whitespace-pre-wrap max-w-full lg:max-w-[470px]">
                                {feature.description}
                            </p>
                            <div className="pt-2">
                                <button className="relative flex items-center justify-center bg-[#151515] text-white h-[40px] px-[20px] rounded-[12px] font-sans text-[16px] font-normal transition-all w-fit cursor-pointer hover:bg-black">
                                    Get started
                                </button>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full lg:w-[473px] h-[300px] lg:h-[423px] shrink-0 relative">
                            <div
                                className="relative w-full h-full rounded-[20px] overflow-hidden flex pt-[20px] pl-[20px] lg:pt-[40px] lg:pl-[40px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url('${feature.bgImage}')` }}
                            >
                                <div className="relative w-full h-full shadow-2xl rounded-[16px] overflow-hidden shrink-0 border border-[#efefef]">
                                    <Image
                                        src={feature.imageSrc}
                                        alt={feature.alt}
                                        fill
                                        className="object-cover object-left-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Comparison Section */}
            <div className="mt-16 lg:mt-24 w-full pb-8">
                <div className="text-left mb-10 lg:mb-16">
                    <h2 className="font-[family-name:var(--font-instrument-sans)] text-[32px] lg:text-[44px] font-medium tracking-[-1px] lg:tracking-[-2.2px] leading-[1.2] lg:leading-[52.8px] text-[#323232] text-left mb-4">
                        Traditional analytics tools <span className="text-[#009245]">don&apos;t cut it any more</span>
                    </h2>
                    <p className="font-[family-name:var(--font-instrument-sans)] text-[16px] lg:text-[20px] font-medium tracking-[-0.8px] leading-[1.4] lg:leading-[26px] text-[#101010] max-w-full lg:max-w-[1120px] text-left">
                        Compound is changing the game in the analytics world and traditional tools don&apos;t even come close.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row w-full lg:w-[1120px] h-auto lg:h-[518.44px] m-0 p-0 box-border gap-[32px]">
                    {/* Traditional Analytics Platforms */}
                    <div className="relative flex flex-col p-6 lg:p-8 rounded-[16px] overflow-hidden w-full lg:w-[544px] lg:h-[518.44px] box-border border-2 border-transparent">
                        <h3 className="font-[family-name:var(--font-instrument-sans)] text-[20px] lg:text-[24px] font-normal tracking-[-1.2px] leading-[1.2] lg:leading-[26.4px] text-[rgb(16,16,16)] text-left whitespace-pre-wrap max-w-full lg:max-w-[480px] mb-6 lg:mb-8">
                            Traditional Analytics Platforms
                        </h3>
                        <ul className="relative flex flex-col flex-none items-start lg:items-center place-content-center gap-4 h-min overflow-hidden p-0 w-full m-0 box-border">
                            {comparisonData.traditional.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-gray-700 text-[16px] lg:text-[18px] font-normal tracking-[-0.04em] leading-[1.4em] text-left whitespace-pre-wrap w-full" style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}>
                                    <div className="w-[20px] h-[20px] rounded-full border border-gray-400 shrink-0" />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compound */}
                    <div className="relative flex flex-col bg-white rounded-[16px] p-6 lg:p-8 overflow-hidden w-full lg:w-[544px] lg:h-[518.44px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03] box-border">
                        <h3 className="font-[family-name:var(--font-instrument-sans)] text-[20px] lg:text-[24px] font-medium text-[rgb(16,16,16)] mb-6 lg:mb-8">
                            Compound
                        </h3>
                        <ul className="relative flex flex-col flex-none items-start lg:items-center place-content-center gap-4 h-min overflow-hidden p-0 w-full m-0 box-border">
                            {comparisonData.compound.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#101010] text-[16px] lg:text-[18px] font-normal tracking-[-0.04em] leading-[1.4em] text-left whitespace-pre-wrap w-full" style={{ fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif' }}>
                                    <div className="w-[20px] h-[20px] aspect-square rounded-full bg-[rgba(31,181,103,0.25)] border border-[rgb(31,181,103)] flex flex-none items-center justify-center overflow-hidden p-0 relative box-border shrink-0">
                                        <img src="/ScreenTick.svg" alt="" className="w-[10px] h-[10px]" />
                                    </div>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
