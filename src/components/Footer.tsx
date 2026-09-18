import { Heart, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 py-12 text-center text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Simple thank you message */}
        <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-bold text-slate-900">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          <span>Thank you for your support 🙏</span>
        </div>

        {/* Small note */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
          This is a personal medical fundraising campaign created by close family friends to support Mrs. Nirmala D (55) at Kauvery Hospital, Vadapalani, Chennai.
        </p>

        <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct hospital/family beneficiary verified</span>
          </div>
          <div>
            <span>All rights reserved &bull; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
