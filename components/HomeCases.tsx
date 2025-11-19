import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseCard } from './CaseCard';
import { CASES } from '../data/mock';

export const HomeCases: React.FC = () => {
    const displayedCases = CASES.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-3">成功案例</h2>
                        <h3 className="text-3xl font-bold text-brand-dark">数字转型的实践典范</h3>
                    </div>
                    <Link to="/cases" className="text-brand-base hover:text-brand-red font-medium flex items-center transition-colors">
                        查看全部案例 <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayedCases.map(item => (
                        <div key={item.id} className="reveal">
                            <CaseCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};