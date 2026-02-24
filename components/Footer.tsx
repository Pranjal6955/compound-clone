import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socials = [
        { name: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
        { name: 'X', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg> },
        { name: 'YouTube', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
        { name: 'Threads', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.026 5.86c-1.394-1.394-3.6-2.193-6.526-2.193C4.246 3.667 0 7.828 0 13.911c0 5.432 3.509 9.422 9.456 9.422 5.263 0 8.57-3.027 8.57-7.851 0-4.106-2.28-7.395-6.666-7.395-2.017 0-3.833.886-4.631 2.474l-.106-.114-1.745 1.579c1.088-1.579 2.763-2.614 4.886-2.614 3.052 0 4.605 2.219 4.605 5.228 0 3.868-2.587 6.008-5.938 6.008-4.386 0-6.491-3.052-6.491-7.254 0-4.912 3.324-8.236 7.64-8.236 2.412 0 4.148.623 5.157 1.632.745.746.903 1.36.903 2.149 0 1.254-.649 1.93-1.631 1.93-.895 0-1.474-.597-1.474-1.544 0-.464.123-.929.351-1.359-1.307-.807-3.21-1.219-5.49-1.219-4.833 0-8.254 2.877-8.254 7.421 0 4.245 2.78 7.026 7.157 7.026 4.79 0 7.377-3.105 7.377-7.07 0-3.772-2.122-6.263-5.324-6.263-2.316 0-4.228 1.132-4.956 3.009-.596-1.553-2.123-2.676-3.86-2.676-2.342 0-4.114 1.834-4.114 4.316 0 2.438 1.807 4.21 4.14 4.21 1.85 0 3.421-1.14 3.99-2.79l1.65 1.096c-.842 2.115-3.009 3.51-5.518 3.51-3.324 0-6.148-2.456-6.148-6.096 0-3.64 2.815-6.14 6.13-6.14 2.176 0 4.097 1.062 5.097 2.658.263-.728.597-1.342 1.053-1.842Zm-7.464 5.377c-1.395 0-2.438 1.088-2.438 2.509 0 1.412 1.043 2.49 2.438 2.49 1.403 0 2.447-1.078 2.447-2.49 0-1.42-1.044-2.509-2.447-2.509Z" /></svg> },
        { name: 'Facebook', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg> },
        { name: 'WhatsApp', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c-.002 2.108.55 4.166 1.594 5.965L0 24l6.335-1.655c1.745.939 3.69 1.434 5.702 1.434h.004c6.58 0 11.939-5.336 11.942-11.893.001-3.178-1.236-6.167-3.463-8.437zM12.049 21.751h-.003c-1.785 0-3.535-.478-5.068-1.383l-.363-.213-3.765.98 1.002-3.648-.236-.374a9.832 9.832 0 0 1-1.503-5.26c.002-5.441 4.452-9.873 9.932-9.873 2.651.001 5.143 1.033 7.016 2.91a9.852 9.852 0 0 1 2.898 6.994c-.002 5.441-4.453 9.873-9.93 9.873zM17.493 14.3c-.297-.149-1.763-.865-2.036-.964-.273-.1-.471-.15-.67.148-.198.298-.767.965-.941 1.164-.173.199-.347.225-.644.075-.297-.15-1.258-.461-2.39-1.464-.88-.781-1.472-1.746-1.646-2.045-.173-.298-.018-.458.13-.607.134-.134.298-.346.446-.52.149-.174.198-.298.298-.496.098-.198.05-.373-.025-.521-.075-.15-.67-1.611-.918-2.206-.241-.58-.487-.502-.67-.511-.173-.01-.371-.01-.57-.01s-.521.075-.793.373c-.273.298-1.041 1.015-1.041 2.479 0 1.464 1.066 2.88 1.214 3.08.149.198 2.095 3.181 5.076 4.464.708.307 1.26.49 1.691.626.711.226 1.356.195 1.866.118.572-.085 1.763-.716 2.012-1.41.248-.696.248-1.291.173-1.415-.074-.124-.273-.198-.57-.347z" /></svg> },
        { name: 'TikTok', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.46-5.46-.02-1.18.25-2.34.8-3.37 1.05-1.95 3.12-3.17 5.34-3.15h.69v4.06c-1.09-.04-2.12.39-2.88 1.12-.52.51-.83 1.25-.8 1.99.04 1.03.77 2.01 1.76 2.37.96.34 2.07.13 2.83-.54.67-.58.98-1.47 1.05-2.36.03-.4.02-.8.02-1.2v-16.4z" /></svg> },
    ];

    return (
        <footer className="w-full bg-[#F5F5F4] px-4 md:px-8 pb-4 md:pb-8 pt-8 font-sans antialiased">
            <div className="max-w-[1360px] w-full mx-auto bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">

                    {/* Logo & Subtitle */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2.5 mb-2.5">
                            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[10px] bg-[#1AB773] text-white overflow-hidden">
                                <Image src="/logo.png" alt="Compound" width={32} height={32} className="object-contain h-full w-full" />
                            </div>
                            <span className="font-semibold text-[22px] tracking-tight text-[#111827]" style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}>
                                Compound
                            </span>
                        </div>
                        <p className="text-[#4B5563] text-[15px] italic mb-0 font-normal tracking-[-0.2px] pl-[2px] mt-1">
                            AI-powered analytics for eCommerce
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[#111827] mt-2 md:mt-1">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                className="flex items-center justify-center p-[6px] rounded-full hover:bg-gray-100 transition-colors text-black"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Big Spacer to separate top and bottom */}
                <div className="flex-1 min-h-[32px] md:min-h-[48px]" />

                {/* Middle Template Info */}
                <div className="mb-[24px] md:mb-[32px]">
                    <div className="flex items-center gap-2 text-[15px] text-[#202020] tracking-[-0.2px]">
                        Template by
                        <div className="flex items-center justify-center overflow-hidden rounded-full w-[20px] h-[20px] ring-1 ring-gray-200">
                            <img src="https://framerusercontent.com/images/15p1J2vC0uGfT98d9ZtqOEK1H8.jpg" alt="Firdavs Abdunazarov" className="object-cover w-full h-full" />
                        </div>
                        <span className="font-medium" style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}>Firdavs Abdunazarov</span>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
                    <p className="text-[#6B7280] text-[13px] tracking-[-0.2px] font-medium m-0">
                        Copyright &copy; Firaworks LLC. All rights reserved
                    </p>

                    <div className="flex items-center gap-6 text-[14px] text-[#4B5563] tracking-[-0.2px] font-medium">
                        <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
                        <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
