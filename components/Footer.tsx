import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socials = [
        { name: 'LinkedIn', hoverColor: '#0077b5', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
        { name: 'X', hoverColor: '#000000', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg> },
        { name: 'YouTube', hoverColor: '#FF0000', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
        { name: 'Threads', hoverColor: '#000000', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" /></svg> },
        { name: 'Facebook', hoverColor: '#1877F2', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg> },
        { name: 'WhatsApp', hoverColor: '#25D366', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c-.002 2.108.55 4.166 1.594 5.965L0 24l6.335-1.655c1.745.939 3.69 1.434 5.702 1.434h.004c6.58 0 11.939-5.336 11.942-11.893.001-3.178-1.236-6.167-3.463-8.437zM12.049 21.751h-.003c-1.785 0-3.535-.478-5.068-1.383l-.363-.213-3.765.98 1.002-3.648-.236-.374a9.832 9.832 0 0 1-1.503-5.26c.002-5.441 4.452-9.873 9.932-9.873 2.651.001 5.143 1.033 7.016 2.91a9.852 9.852 0 0 1 2.898 6.994c-.002 5.441-4.453 9.873-9.93 9.873zM17.493 14.3c-.297-.149-1.763-.865-2.036-.964-.273-.1-.471-.15-.67.148-.198.298-.767.965-.941 1.164-.173.199-.347.225-.644.075-.297-.15-1.258-.461-2.39-1.464-.88-.781-1.472-1.746-1.646-2.045-.173-.298-.018-.458.13-.607.134-.134.298-.346.446-.52.149-.174.198-.298.298-.496.098-.198.05-.373-.025-.521-.075-.15-.67-1.611-.918-2.206-.241-.58-.487-.502-.67-.511-.173-.01-.371-.01-.57-.01s-.521.075-.793.373c-.273.298-1.041 1.015-1.041 2.479 0 1.464 1.066 2.88 1.214 3.08.149.198 2.095 3.181 5.076 4.464.708.307 1.26.49 1.691.626.711.226 1.356.195 1.866.118.572-.085 1.763-.716 2.012-1.41.248-.696.248-1.291.173-1.415-.074-.124-.273-.198-.57-.347z" /></svg> },
        { name: 'TikTok', hoverColor: '#ff0050', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.46-5.46-.02-1.18.25-2.34.8-3.37 1.05-1.95 3.12-3.17 5.34-3.15h.69v4.06c-1.09-.04-2.12.39-2.88 1.12-.52.51-.83 1.25-.8 1.99.04 1.03.77 2.01 1.76 2.37.96.34 2.07.13 2.83-.54.67-.58.98-1.47 1.05-2.36.03-.4.02-.8.02-1.2v-16.4z" /></svg> },
    ];

    return (
        <footer className="flex flex-col items-center justify-start pt-[20px] md:pt-[40px] px-6 h-min relative box-border opacity-100 font-sans text-[12px] w-full bg-[#F5F5F4] antialiased">
            <div className="max-w-[1360px] w-full mx-auto bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-[48px] lg:p-[56px] flex flex-col justify-between min-h-[auto] md:min-h-[320px]">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">

                    {/* Logo & Subtitle */}
                    <div className="flex flex-col">
                        <Link href="/" className="opacity-100 flex justify-start items-center cursor-pointer flex-row gap-[12px] h-min overflow-hidden p-0 relative no-underline w-min box-border mb-3">
                            <div className="flex h-[36px] w-[36px] md:h-[42px] md:w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#1AB773] text-white overflow-hidden">
                                <Image src="/logo.png" alt="Compound" width={42} height={42} className="object-contain h-full w-full" />
                            </div>
                            <span className="font-semibold text-[20px] md:text-[22px] tracking-tight text-[#111827]" style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}>
                                Compound
                            </span>
                        </Link>
                        <p className="m-0 p-0">
                            <em className="text-[#4B5563] text-[14px] md:text-[16px] font-normal tracking-[-0.2px]" style={{ fontFamily: '"Inter", sans-serif' }}>
                                AI-powered analytics for eCommerce
                            </em>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-1.5 text-[#111827] mt-2 md:mt-1">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                style={{ '--hover-color': social.hoverColor } as React.CSSProperties}
                                className="flex items-center justify-center p-1 rounded-full text-black transition-colors hover:text-[var(--hover-color)]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 min-h-[40px] md:min-h-[48px]" />

                {/* Middle Template Info */}
                <div className="mb-8 md:mb-[32px]">
                    <h6 className="flex items-center gap-2 m-0 p-0 text-black tracking-[-0.72px] font-normal text-[16px] md:text-[18px] leading-tight" style={{ fontFamily: 'Recoleta Regular' }}>
                        Template by
                        <div className="group flex items-center justify-center overflow-hidden rounded-full w-[20px] h-[20px] ring-1 ring-gray-200 bg-[#d05a32] cursor-pointer">
                            <Image src="/footerPerson.png" alt="Firdavs Abdunazarov" width={20} height={20} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <span>Firdavs Abdunazarov</span>
                    </h6>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 border-t border-gray-100 pt-8">
                    <p className="text-[#6B7280] text-[12px] md:text-[13px] tracking-[-0.2px] font-medium m-0">
                        Copyright &copy; Firaworks LLC. All rights reserved
                    </p>

                    <div className="flex items-center gap-4 md:gap-6 text-[13px] md:text-[14px] text-[#4B5563] tracking-[-0.2px] font-medium">
                        <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
                        <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
