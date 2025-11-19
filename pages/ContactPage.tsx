import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Contact } from '../components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader 
                title="联系我们" 
                subtitle="期待与您的合作，共创数字未来。"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-2">咨询热线</h3>
                        <p className="text-brand-base">400-888-6666</p>
                        <p className="text-brand-light text-xs mt-2">周一至周五 9:00-18:00</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-2">商务邮箱</h3>
                        <p className="text-brand-base">business@huayao-tech.com</p>
                        <p className="text-brand-light text-xs mt-2">我们将于24小时内回复</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-2">公司总部</h3>
                        <p className="text-brand-base">中国 · 郑州</p>
                        <p className="text-brand-light text-xs mt-2">郑东新区金融岛内环路</p>
                    </div>
                </div>
            </div>

            {/* Reusing the Contact Form Section */}
            <Contact />
            
            {/* Simple Map Placeholder */}
            <div className="h-96 bg-slate-100 w-full relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <span className="font-medium">地图加载中...</span>
                    </div>
                 </div>
            </div>
        </div>
    );
};