import { Heart, ArrowDown, Share2, AlertCircle, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToShare = () => {
    document.getElementById('share')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-white border-b border-slate-100">
      {/* Subtle calm ambient background decoration */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -z-10 w-[800px] h-[350px] bg-gradient-to-b from-sky-50/70 via-rose-50/30 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Soft emergency badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 text-xs sm:text-sm font-medium mb-6 shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
          </span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Urgent Medical Support Appeal</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.2] mb-6"
        >
          Urgent Medical Support Needed
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Help <span className="font-semibold text-slate-900">Mrs. Nirmala D</span> undergo life-saving{' '}
          <span className="font-semibold text-sky-900">Aortic Valve Replacement Surgery</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14"
        >
          <button
            onClick={scrollToDonate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-200 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>Donate Now</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl text-base font-medium transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-slate-500" />
            <span>Share This Story</span>
          </button>
        </motion.div>

        {/* Soft Goal Progress Bar Visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-left shadow-xs max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Target Treatment Estimate
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Goal: ₹6,04,000
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-100/70 text-sky-800 text-xs font-semibold self-start sm:self-auto">
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              Kauvery Hospital, Chennai
            </div>
          </div>

          {/* Progress bar line visual */}
          <div className="w-full bg-slate-200/90 rounded-full h-3 overflow-hidden mb-2">
            <div
              className="bg-gradient-to-r from-rose-500 to-rose-600 h-full rounded-full transition-all duration-1000"
              style={{ width: '18%' }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Fundraising actively ongoing
            </span>
            <span className="font-medium text-slate-700">Urgent surgical intervention</span>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-start gap-2 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              100% of all contributions are transferred directly to the designated family account for hospital admission and surgical deposits.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
