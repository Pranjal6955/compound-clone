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
        <section className="py-24 px-6 lg:px-0 w-full max-w-[1120px] mx-auto">
            <div className="mb-16">
                <h2 className="font-[family-name:var(--font-instrument-sans)] text-[44px] font-medium tracking-tight leading-tight text-[#323232] text-left mb-4">
                    Product Features
                </h2>
                <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-normal tracking-tight leading-7 text-[#101010] text-left">
                    Compound is changing the game in the analytics world and traditional tools don&apos;t even come close.
                </p>
            </div>

            <div className="relative pb-[40px] flex flex-col gap-[128px]">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="font-sans text-[12px] font-normal text-start whitespace-normal bg-white text-black w-full max-w-[1120px] lg:h-[543px] p-[60px] sticky top-[100px] flex overflow-hidden rounded-[32px] flex-col lg:flex-row items-center gap-12 lg:gap-24 shadow-[0_-1px_3px_rgba(0,0,0,0.05),0_-10px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.05]"
                        style={{ zIndex: index + 1 }}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h3 className="font-[family-name:var(--font-instrument-sans)] text-[36px] font-medium tracking-[-1.8px] leading-[43.2px] text-[#323232] whitespace-pre-wrap break-words text-left">
                                {feature.title}
                            </h3>
                            <p className="font-[family-name:var(--font-instrument-sans)] text-[18px] font-normal tracking-[-0.72px] leading-[25.2px] text-[#101010] text-left whitespace-pre-wrap max-w-[470px]">
                                {feature.description}
                            </p>
                            <div className="pt-2">
                                <button className="relative flex items-center justify-center bg-[#151515] text-white h-[40px] px-[20px] rounded-[12px] font-sans text-[16px] font-normal transition-all w-fit cursor-pointer hover:bg-black">
                                    Get started
                                </button>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full lg:w-[473px] h-[423px] shrink-0 relative">
                            <div
                                className="relative w-full h-full rounded-[20px] overflow-hidden flex pt-[40px] pl-[40px] bg-cover bg-center bg-no-repeat"
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
            <div className="mt-24 w-full pb-24">
                <div className="text-left mb-16">
                    <h2 className="font-[family-name:var(--font-instrument-sans)] text-[44px] font-medium tracking-[-2.2px] leading-[52.8px] text-[#323232] text-left mb-4">
                        Traditional analytics tools <span className="text-[#009245]">don&apos;t cut it any more</span>
                    </h2>
                    <p className="font-[family-name:var(--font-instrument-sans)] text-[20px] font-medium tracking-[-0.8px] leading-[26px] text-[#101010] max-w-[1120px] text-left">
                        Compound is changing the game in the analytics world and traditional tools don&apos;t even come close.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[95px] items-start max-w-[1120px] mx-auto">
                    {/* Traditional Analytics Platforms */}
                    <div className="relative flex flex-col p-8 rounded-[16px] overflow-hidden w-full lg:w-[512.5px] lg:h-[502.17px]">
                        <h3 className="font-[family-name:var(--font-instrument-sans)] text-[24px] font-normal tracking-[-1.2px] leading-[26.4px] text-[#151515] text-left whitespace-pre-wrap max-w-[480px] mb-8">
                            Traditional Analytics Platforms
                        </h3>
                        <ul className="relative flex flex-col gap-3 w-full max-w-[480px] overflow-hidden">
                            {comparisonData.traditional.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#101010] font-[family-name:var(--font-instrument-sans)] text-[18px] font-normal tracking-[-0.72px] leading-[25.2px] whitespace-pre-wrap">
                                    <div className="w-[20px] h-[20px] rounded-full border border-[#101010] shrink-0" />
                                    <span className="max-w-[448px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compound */}
                    <div className="relative flex flex-col bg-white rounded-[16px] p-8 overflow-hidden w-full lg:w-[512.5px] lg:h-[502.17px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03]">
                        <h3 className="font-[family-name:var(--font-instrument-sans)] text-[24px] font-medium text-[#323232] mb-8">
                            Compound
                        </h3>
                        <ul className="relative flex flex-col gap-4 w-full max-w-[480px] overflow-hidden">
                            {comparisonData.compound.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#101010] font-[family-name:var(--font-instrument-sans)] text-[18px] font-normal tracking-[-0.72px] leading-[25.2px] whitespace-pre-wrap">
                                    <div className="w-[20px] h-[20px] rounded-full bg-[rgba(31,181,103,0.25)] border border-[#009245]/30 flex items-center justify-center shrink-0">
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#009245" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="max-w-[448px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
