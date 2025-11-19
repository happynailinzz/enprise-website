import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    bgClass?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgClass = 'bg-slate-900' }) => {
    return (
        <div className={`relative py-24 ${bgClass} overflow-hidden`}>
            <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-fade-in-up [animation-delay:100ms]">{subtitle}</p>
            </div>
        </div>
    );
};