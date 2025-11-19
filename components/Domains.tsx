import React from 'react';
import { MonitorSmartphone, Server, BrainCircuit, ShieldCheck, Tag, Zap } from 'lucide-react';
import { DomainItem } from '../types';

const DOMAINS: DomainItem[] = [
    {
        id: '1',
        title: '智能化与数字化转型',
        description: '为政企提供顶层设计与落地实施，推动业务流程重塑与管理升级，实现降本增效。',
        icon: MonitorSmartphone
    },
    {
        id: '2',
        title: '算力与数据中心',
        description: '响应“东数西算”战略，建设绿色、高效的数据中心基础设施，提供强大的算力底座。',
        icon: Server
    },
    {
        id: '3',
        title: '人工智能',
        description: '结合科大讯飞等 AI 核心技术，在智慧城市、智能制造等场景落地 AI 应用。',
        icon: BrainCircuit
    },
    {
        id: '4',
        title: '信创国产化',
        description: '基于华为鲲鹏/昇腾生态，提供从硬件到软件的全栈国产化替代方案，保障信息安全。',
        icon: ShieldCheck
    },
    {
        id: '5',
        title: '数据标注',
        description: '提供高质量的数据清洗与标注服务，为 AI 模型训练提供精准的燃料。',
        icon: Tag
    },
    {
        id: '6',
        title: '源网荷储（信息化）',
        description: '聚焦能源行业，通过信息化手段实现电源、电网、负荷、储能的协同互动。',
        icon: Zap
    },
];

export const Domains: React.FC = () => {
    return (
        <section id="domains" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-3">核心产业</h2>
                    <h3 className="text-3xl font-bold text-brand-dark">六大产业领域深耕</h3>
                    <p className="mt-4 text-brand-base max-w-2xl mx-auto">依托头部科技企业技术底座，提供全场景解决方案。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DOMAINS.map((domain) => {
                        const Icon = domain.icon;
                        return (
                            <div 
                                key={domain.id}
                                className="bg-white border border-slate-200 p-6 rounded-xl group hover:bg-brand-dark hover:text-white hover:border-brand-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                                    <Icon className="w-6 h-6 text-brand-dark group-hover:text-white" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 group-hover:text-white text-brand-dark">{domain.title}</h4>
                                <p className="text-sm text-brand-base group-hover:text-slate-300">
                                    {domain.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};