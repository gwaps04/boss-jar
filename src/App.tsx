import { useState } from 'react';
import { BossNavbar } from './components/BossNavbar';
import { HeroSection } from './components/HeroSection';
import { ComedyVault } from './components/ComedyVault';
import { PartnershipsSection } from './components/PartnershipsSection';
import { AboutBossSection } from './components/AboutBossSection';
import { CollabBookingSection } from './components/CollabBookingSection';
import { FooterSection } from './components/FooterSection';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { RateCardModal } from './components/RateCardModal';
import { SkitVideo } from './types';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [activeSkit, setActiveSkit] = useState<SkitVideo | null>(null);
  const [rateCardOpen, setRateCardOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenBooking = () => {
    const collabSection = document.getElementById('collab');
    if (collabSection) {
      collabSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreVault = () => {
    const vaultSection = document.getElementById('comedy-vault');
    if (vaultSection) {
      vaultSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageFromRateCard = (tierName: string) => {
    handleOpenBooking();
    showToast(`Selected "${tierName}". Fill out the brief to proceed!`);
  };

  const handleBookFromSkit = (skitTitle: string) => {
    handleOpenBooking();
    showToast(`Inquiring for a concept similar to "${skitTitle}"`);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col selection:bg-[#ff1a35] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-zinc-900 border border-[#ffd000]/50 text-white shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#ffd000] shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar (References local src/assets folder) */}
      <BossNavbar
        onOpenRateCard={() => setRateCardOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (1.8M followers, Call to Action, Mayon Volcano / Plaza photo) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenRateCard={() => setRateCardOpen(true)}
          onExploreVault={handleExploreVault}
        />

        {/* 2. Comedy Vault (Sleek video grid showcase) */}
        <ComedyVault
          onSelectSkit={(skit) => setActiveSkit(skit)}
        />

        {/* 3. Partnerships Section (Trusted By, Retail, Hotels, Food Chains, ROI Proof) */}
        <PartnershipsSection
          onOpenBooking={handleOpenBooking}
          onOpenRateCard={() => setRateCardOpen(true)}
        />

        {/* 4. About the Boss (Personable, humane biography) */}
        <AboutBossSection />

        {/* 5. Collab With Me (Interactive Booking Inquiries Form Mockup) */}
        <CollabBookingSection
          onOpenRateCard={() => setRateCardOpen(true)}
        />
      </main>

      {/* Footer */}
      <FooterSection
        onOpenRateCard={() => setRateCardOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Video Player Lightbox */}
      <VideoPlayerModal
        skit={activeSkit}
        onClose={() => setActiveSkit(null)}
        onBookSkit={handleBookFromSkit}
      />

      {/* Rate Card & Media Kit Modal */}
      <RateCardModal
        isOpen={rateCardOpen}
        onClose={() => setRateCardOpen(false)}
        onSelectTier={handleSelectPackageFromRateCard}
      />

    </div>
  );
}

export default App;
