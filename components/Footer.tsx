
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                            {/* Image Logo - Consistent with Header */}
                            <img 
                                src="/logo.png"
                                alt="华曜数智 Logo" 
                                className="h-8 w-auto object-contain"
                            />
                            <span className="font-bold text-lg text-brand-dark">华曜数智</span>
                        </div>
                        <p className="text-xs text-brand-light mt-1">中原数字经济的关键赋能者</p>
                    </div>
                    <div className="flex gap-6 text-sm text-brand-base">
                        <a href="#domains" className="hover:text-brand-dark transition-colors">六大产业</a>
                        <a href="#model" className="hover:text-brand-dark transition-colors">服务模式</a>
                        <span className="text-slate-300">|</span>
                        <span>© 2025 河南华曜数智科技有限公司. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
