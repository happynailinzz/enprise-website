import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Domains } from '../components/Domains';
import { ServiceModel } from '../components/ServiceModel';

export const Solutions: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="服务与解决方案" 
                subtitle="依托华为等头部企业技术底座，提供全场景数字化解决方案，助力政企实现智能升级。"
            />
            
            {/* Reuse Domains Component with slightly different context if needed, or just display it */}
            <Domains />
            
            {/* Reuse Service Model */}
            <ServiceModel />
            
            {/* Additional Solutions Content could go here */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">为什么选择华曜数智？</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-brand-red text-4xl font-bold mb-2">10+</div>
                            <div className="text-brand-base">年行业经验</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-brand-red text-4xl font-bold mb-2">50+</div>
                            <div className="text-brand-base">大型项目案例</div>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-brand-red text-4xl font-bold mb-2">100+</div>
                            <div className="text-brand-base">技术专家团队</div>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-brand-red text-4xl font-bold mb-2">100%</div>
                            <div className="text-brand-base">自主可控方案</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};