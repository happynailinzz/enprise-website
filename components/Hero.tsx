
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Full Width Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Digital Network Background" 
                    className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                    style={{ animationDirection: 'alternate' }}
                />
                {/* Overlays removed as requested */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
                <div className="max-w-3xl animate-fade-in-up">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/20 text-white text-xs font-semibold mb-8 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        2025 战略落户郑州 · 中原数字经济关键赋能者
                    </div>

                    {/* Headline - Added text-shadow for better readability without overlay */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
                        政企数字化转型与<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-400 filter drop-shadow-md">智能升级的领先服务商</span>
                    </h1>

                    {/* Description - Added text-shadow */}
                    <p className="mt-4 text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md">
                        聚焦<span className="text-white font-bold">“东数西算”</span>与<span className="text-white font-bold">“信创国产化”</span>战略，凭借华为等头部企业基因，打造咨询、集成、销售、投融资“四位一体”服务能力，构建可信赖的数字底座。
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 rounded-full bg-brand-red hover:bg-red-600 text-white font-bold text-lg shadow-xl shadow-red-900/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group border border-transparent"
                        >
                            开启合作 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('domains')}
                            className="px-8 py-4 rounded-full bg-black/20 hover:bg-black/40 text-white font-bold text-lg border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 group shadow-lg"
                        >
                            核心业务
                            <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-white transition-colors" />
                        </button>
                    </div>

                    {/* Stats / Trust Indicators - Enhanced visibility */}
                    <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-8 md:gap-12 max-w-lg bg-black/10 rounded-xl p-4 backdrop-blur-sm">
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">3<span className="text-brand-red text-xl">+</span></div>
                            <div className="text-xs text-white/90 mt-1 font-medium">省份核心深耕</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">Top</div>
                            <div className="text-xs text-white/90 mt-1 font-medium">头部科技基因</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">100<span className="text-brand-red text-xl">%</span></div>
                            <div className="text-xs text-white/90 mt-1 font-medium">信创国产适配</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-80 text-white drop-shadow-md">
                <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
                <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center pt-1 shadow-sm">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};
