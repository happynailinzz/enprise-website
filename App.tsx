
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Cases } from './pages/Cases';
import { News } from './pages/News';
import { ContactPage } from './pages/ContactPage';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Re-trigger scroll reveal animation
        // We use a small timeout to allow the new page content to render
        setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((reveal) => {
                reveal.classList.remove('active');
                // Force reflow
                void (reveal as HTMLElement).offsetWidth;
                reveal.classList.add('active');
            });
        }, 100);

    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    
    // Scroll reveal effect hook for general scrolling
    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        setTimeout(revealOnScroll, 100); 
        
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-brand-bg text-brand-dark font-sans">
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/cases" element={<Cases />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
    