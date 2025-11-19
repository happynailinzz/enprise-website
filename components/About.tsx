import React from 'react';
import { Landmark, Users, MapPin, Award, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-4">源自巨头，立足中原</h2>
                            <p className="text-brand-base leading-relaxed mb-6">
                                河南华曜数智科技有限公司骨干团队主要来自<span className="font-bold text-brand-dark">华为、海康威视、H3C</span>等头部科技企业，具备丰富的省市级重点项目操盘经验。
                            </p>
                            <p className="text-brand-base leading-relaxed mb-6">
                                作为国家数字战略的重要执行者，公司于 2025 年随华为中国区总部同步战略落户<span className="font-bold text-brand-dark">郑州</span>。我们致力于抢占中原地区数字经济产业升级的历史机遇，在山东、湖北、河南三省积累了丰富的政府、能源、制造等关键行业经验。
                            </p>
                            <a href="#contact" className="text-brand-red font-semibold hover:underline inline-flex items-center group">
                                了解更多企业愿景 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Landmark, title: '政企服务', sub: '专注于G端与B端' },
                                { icon: Users, title: '精英团队', sub: '华为/海康/H3C背景' },
                                { icon: MapPin, title: '立足郑州', sub: '辐射中原经济区' },
                                { icon: Award, title: '战略定位', sub: '更高的产业链整合' }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                                        <Icon className="w-8 h-8 text-brand-base mb-2" />
                                        <div className="font-bold text-brand-dark">{item.title}</div>
                                        <div className="text-xs text-brand-light mt-1">{item.sub}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};