import { useState, useEffect } from 'react';
import { Heart, ArrowUpRight, X } from 'lucide-react';

export function StickyMobileDonate() {
  const [dismissed, setDismissed] = useState(false);
  const [showSticky, setShowSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If user reaches the payment section itself, hide the sticky bar so it doesn't obstruct view
      const donateEl = document.getElementById('donate');
      if (donateEl) {
        const rect = donateEl.getBoundingClientRect();
        // If donation section is currently in view
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 150) {
          setShowSticky(false);
        } else {
          setShowSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !showSticky) return null;

  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick mobile donation bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-lg border-t border-slate-200/90 px-3.5 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-xl shadow-slate-900/15 transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-2.5 max-w-lg mx-auto">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
            <span className="truncate">Goal: ₹6,04,000</span>
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
            Help Mrs. Nirmala D (55)
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={scrollToDonate}
            className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-sm shadow-rose-200 cursor-pointer min-h-[42px]"
          >
            <Heart className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>Donate</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg min-h-[42px] min-w-[36px] flex items-center justify-center cursor-pointer"
            aria-label="Dismiss sticky donation banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
