
import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CaseCard } from '../components/CaseCard';
import { CASES } from '../data/mock';

export const Cases: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('全部');

    const categories = ['全部', '企业数字化', '智慧能源', '智慧教育', '产教融合'];

    const filteredCases = activeCategory === '全部' 
        ? CASES 
        : CASES.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50">
             <PageHeader 
                title="成功案例" 
                subtitle="见证数字化转型的力量，探索我们在不同行业的创新实践。"
            />
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Functional Filters */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {categories.map((filter) => (
                            <button 
                                key={filter}
                                onClick={() => setActiveCategory(filter)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:-translate-y-0.5 ${
                                    activeCategory === filter
                                    ? 'bg-brand-red text-white shadow-lg shadow-red-200' 
                                    : 'bg-white text-brand-base hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCases.length > 0 ? (
                            filteredCases.map((item, index) => (
                                <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <CaseCard item={item} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-slate-400">
                                暂无相关案例
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
