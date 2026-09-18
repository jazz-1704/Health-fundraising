import { Heart, Building2, User, Activity, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';

export function PatientStory() {
  const details = [
    {
      icon: User,
      label: 'Patient',
      value: 'Mrs. Nirmala D',
      sub: '55 years old',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      icon: Activity,
      label: 'Advised Procedure',
      value: 'Aortic Valve Replacement',
      sub: 'Open Heart Surgery',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      icon: Building2,
      label: 'Hospital',
      value: 'Kauvery Hospital',
      sub: 'Vadapalani, Chennai',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: IndianRupee,
      label: 'Estimated Cost',
      value: '₹6,04,000',
      sub: 'Surgery & critical ICU care',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="story" className="py-16 md:py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-3 shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Patient Background & Diagnosis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Patient Story & Medical Condition
          </h2>
        </div>

        {/* Compassionate Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8 relative"
        >
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 items-center justify-center text-2xl shrink-0 shadow-2xs">
              🙏
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-slate-900">
                “My friend’s mother, <span className="font-bold text-slate-900">Mrs. Nirmala D (55 years)</span>, is currently in a serious medical condition and has been advised to undergo <span className="font-semibold text-sky-800">Aortic Valve Replacement (Open Heart Surgery)</span>.”
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                Due to severe calcification and critical dysfunction of the aortic valve, her cardiac function requires prompt surgical intervention to prevent irreversible cardiac strain. The medical team at Kauvery Hospital has prepared the clinical pathway for her open-heart surgery, and every hour counts in securing the required operational and intensive care expenses.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="text-base">🙏</span>
              <span>Holding prayers for her speedy recovery and strength</span>
            </span>
            <span className="flex items-center gap-1 text-rose-600 font-medium">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              Direct family campaign
            </span>
          </div>
        </motion.div>

        {/* Key Details Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.badgeColor} border`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
