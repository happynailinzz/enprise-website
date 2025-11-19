
import React from 'react';

const PARTNERS = [
    {
        name: "HUAWEI",
        // Official Wikimedia SVG - Highly reliable
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei_Logo.svg",
        width: "h-12"
    },
    {
        name: "xFusion",
        // xFusion logo is hard to hotlink reliably. We will use a text-based fallback that looks like the logo if image fails
        // Trying a specific clearbit link, but usually text is safer for this specific B2B brand
        url: "https://logo.clearbit.com/xfusion.com", 
        width: "h-10",
        isText: true // Flag to prefer text styling if image fails
    },
    {
        name: "iFLYTEK",
        // Clean SVG
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Iflytek_logo.svg",
        width: "h-10"
    },
    {
        name: "Hikvision",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hikvision_logo.svg",
        width: "h-8"
    },
    {
        name: "H3C",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/22/H3C_logo.svg",
        width: "h-10"
    }
];

export const Partners: React.FC = () => {
    return (
        <section className="py-12 border-y border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-bold text-brand-red uppercase tracking-widest mb-10">战略合作伙伴</p>
                
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    {PARTNERS.map((partner) => (
                        <div 
                            key={partner.name} 
                            className="group relative flex items-center justify-center transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                            title={partner.name}
                        >
                            {partner.name === "xFusion" ? (
                                /* Special handling for xFusion to ensure it looks good even without an image */
                                <div className="flex items-center gap-1 text-3xl font-bold tracking-tight text-slate-800 group-hover:text-[#E60012] transition-colors">
                                    <span className="italic">x</span>Fusion
                                </div>
                            ) : (
                                <img 
                                    src={partner.url} 
                                    alt={`${partner.name} Logo`} 
                                    referrerPolicy="no-referrer"
                                    className={`${partner.width} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                                    onError={(e) => {
                                        // Fallback to styled text if image fails
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.innerText = partner.name;
                                            parent.className = "text-2xl font-bold text-slate-700 group-hover:text-brand-dark transition-colors";
                                        }
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
