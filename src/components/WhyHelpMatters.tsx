import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyHelpMatters() {
  return (
    <section id="why-help" className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Community Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Your Help Matters
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-50 via-white to-sky-50/30 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs"
        >
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              The family has exhausted all their immediate savings on preliminary hospital diagnostic scans, consultations, and intensive pre-operative stabilization. Arranging a total sum of <span className="font-semibold text-slate-900">₹6,04,000</span> on short notice is an overwhelming financial hurdle for them in this critical window.
            </p>

            <div className="py-3 px-6 bg-white/80 backdrop-blur-xs rounded-xl border border-sky-100 inline-block shadow-2xs">
              <p className="text-lg sm:text-xl font-bold text-sky-950 tracking-tight flex items-center justify-center gap-2">
                <span>“Any contribution, even a small amount, can make a big difference.”</span>
              </p>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed">
              Whether you can contribute ₹200, ₹500, ₹2,000, or more, your generosity directly relieves this financial burden and helps Mrs. Nirmala receive the timely surgery she needs. If you are unable to donate at this time, sharing this appeal with your network is equally valuable.
            </p>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Direct Family Beneficiary
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Transparent Medical Purpose
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
