import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PatientStory } from './components/PatientStory';
import { WhyHelpMatters } from './components/WhyHelpMatters';
import { DonationSection } from './components/DonationSection';
import { ShareSection } from './components/ShareSection';
import { Footer } from './components/Footer';
import { StickyMobileDonate } from './components/StickyMobileDonate';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    setToastMessage(`Copied ${label} to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans pb-24 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <PatientStory />
        <WhyHelpMatters />
        <DonationSection onCopy={handleCopy} />
        <ShareSection onCopy={handleCopy} />
      </main>
      <Footer />
      <StickyMobileDonate />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
