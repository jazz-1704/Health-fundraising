import { useState } from 'react';
import { Heart, ShieldCheck, ArrowRight, Menu, X, Share2 } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand & Hospital Tag */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-xs shrink-0">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </div>
          <div>
            <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base block leading-tight">
              Medical Relief Fund
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600 inline shrink-0" />
              Kauvery Hospital, Chennai
            </span>
          </div>
        </div>

        {/* Desktop / Laptop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600 font-medium">
          <button
            onClick={() => scrollToSection('story')}
            className="hover:text-rose-600 transition-colors cursor-pointer"
          >
            Patient Story
          </button>
          <button
            onClick={() => scrollToSection('why-help')}
            className="hover:text-rose-600 transition-colors cursor-pointer"
          >
            Why It Matters
          </button>
          <button
            onClick={() => scrollToSection('donate')}
            className="hover:text-rose-600 transition-colors cursor-pointer"
          >
            Donation Details
          </button>
          <button
            onClick={() => scrollToSection('share')}
            className="hover:text-rose-600 transition-colors cursor-pointer"
          >
            Share Appeal
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Donate CTA */}
          <button
            onClick={() => scrollToSection('donate')}
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm shadow-rose-200 cursor-pointer min-h-[40px] sm:min-h-[44px]"
          >
            <span>Donate Now</span>
            <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('story')}
              className="p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              Patient Story
            </button>
            <button
              onClick={() => scrollToSection('why-help')}
              className="p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              Why It Matters
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className="p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors font-semibold text-rose-600"
            >
              How to Donate
            </button>
            <button
              onClick={() => scrollToSection('share')}
              className="p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              Share Story
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs text-slate-500">
            <button
              onClick={() => scrollToSection('share')}
              className="inline-flex items-center gap-1 text-slate-600 py-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Appeal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
