import React from 'react';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Domains } from '../components/Domains';
import { ServiceModel } from '../components/ServiceModel';
import { HomeCases } from '../components/HomeCases';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            <Hero />
            <Partners />
            <Domains />
            <ServiceModel />
            <HomeCases />
            <About />
            <Contact />
        </div>
    );
};