
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { NEWS } from '../data/mock';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export const News: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="行业动态" 
                subtitle="关注行业最新资讯，洞察数字经济发展趋势与政策导向。"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {NEWS.map((item, index) => (
                            <article 
                                key={item.id} 
                                className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Section */}
                                <div className="md:w-80 h-56 md:h-auto flex-shrink-0 relative overflow-hidden bg-slate-200">
                                    {item.imageUrl ? (
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            暂无图片
                                        </div>
                                    )}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-red text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                                            <Tag className="w-3 h-3" />
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                    <div className="flex items-center text-xs font-medium text-slate-500 mb-3">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                        <span>{item.date}</span>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors line-clamp-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-brand-base text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-2 flex-grow">
                                        {item.summary}
                                    </p>
                                    
                                    <div className="flex items-center text-brand-red font-bold text-sm group/btn w-fit mt-auto">
                                        阅读全文 
                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {/* Pagination Placeholder */}
                    <div className="mt-12 flex justify-center">
                        <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 hover:border-brand-red/30 transition-colors text-sm font-medium">
                            加载更多动态
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
