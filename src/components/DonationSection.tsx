import { useState, useEffect } from 'react';
import { 
  Building2, 
  CreditCard, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  ExternalLink,
  Heart,
  Info,
  Download
} from 'lucide-react';
import QRCode from 'qrcode';
import { motion } from 'motion/react';

interface DonationSectionProps {
  onCopy: (text: string, label: string) => void;
}

export function DonationSection({ onCopy }: DonationSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  // Official standard UPI intent link
  const upiIntentUri = 'upi://pay?pa=karan2301.m@okicici&pn=Karunakaran%20M&cu=INR&tn=Medical%20support%20for%20Nirmala%20D';

  useEffect(() => {
    QRCode.toDataURL(
      upiIntentUri,
      {
        width: 320,
        margin: 1.5,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      },
      (err, url) => {
        if (!err && url) {
          setQrDataUrl(url);
        }
      }
    );
  }, []);

  const handleCopy = (text: string, label: string, key: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedKey(key);
        onCopy(text, label);
        setTimeout(() => setCopiedKey(null), 2000);
      },
      () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedKey(key);
        onCopy(text, label);
        setTimeout(() => setCopiedKey(null), 2000);
      }
    );
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'Nirmala_Medical_Fund_UPI_QR.png';
    link.click();
  };

  const bankDetails = [
    { label: 'Bank Name', value: 'Indian Bank', key: 'bank_name', copyable: false },
    { label: 'Account Holder', value: 'Karunakaran M', key: 'account_holder', copyable: true },
    { label: 'Account Number', value: '7311261290', key: 'account_number', copyable: true },
    { label: 'IFSC Code', value: 'IDIB000C022', key: 'ifsc_code', copyable: true },
  ];

  return (
    <section id="donate" className="py-14 sm:py-20 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold mb-3 shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Direct Financial Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How You Can Help
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose either convenient Bank Transfer or instant UPI / QR scan below.
          </p>
        </div>

        {/* Note banner: All contributions go directly towards treatment */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="bg-emerald-50/95 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-3 text-emerald-950 text-xs sm:text-sm md:text-base font-medium shadow-xs text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              All contributions go directly towards Mrs. Nirmala’s treatment and surgery.
            </span>
          </div>
        </div>

        {/* Two Options Grid - Responsive from 320px mobile to 4K desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Option 1 – Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs font-bold text-sky-800 uppercase tracking-wider block">
                      Option 1
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight truncate">
                      Bank Transfer
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                Transfer directly from any Indian net banking portal, mobile app (NEFT, IMPS, RTGS), or physical bank branch.
              </p>

              {/* Bank Details Table/List */}
              <div className="space-y-3">
                {bankDetails.map((field) => {
                  const isCopied = copiedKey === field.key;
                  return (
                    <div
                      key={field.key}
                      className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2.5 sm:gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                          {field.label}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg font-bold text-slate-900 tracking-tight font-mono break-all select-all block mt-0.5">
                          {field.value}
                        </span>
                      </div>

                      {field.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(field.value, field.label, field.key)}
                          className={`shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] min-w-[76px] focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:outline-none ${
                            isCopied
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                          }`}
                          title={`Copy ${field.label}`}
                          aria-label={`Copy ${field.label}`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4 text-white" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-slate-500" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-600">
                <CreditCard className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Branch: Chennai &bull; Zero transfer fee</span>
              </span>
              <button
                onClick={() => handleCopy('Indian Bank\nAccount: 7311261290\nIFSC: IDIB000C022\nHolder: Karunakaran M', 'All Bank Details', 'all_bank')}
                className="text-sky-700 hover:text-sky-800 font-medium inline-flex items-center gap-1 cursor-pointer py-1"
              >
                <Copy className="w-3 h-3" />
                <span>Copy all bank details</span>
              </button>
            </div>
          </motion.div>

          {/* Option 2 – UPI / GPay */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                      Option 2
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight truncate">
                      UPI / GPay / PhonePe
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>

              {/* QR Code and Instructions */}
              <div className="flex flex-col items-center justify-center text-center mb-5 sm:mb-6">
                <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm inline-block max-w-full">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="UPI Payment QR Code for Karunakaran M"
                      className="w-44 h-44 xs:w-48 xs:h-48 sm:w-56 sm:h-56 object-contain rounded-lg mx-auto"
                    />
                  ) : (
                    <div className="w-44 h-44 xs:w-48 xs:h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center bg-slate-50 rounded-lg text-slate-400 mx-auto">
                      <QrCode className="w-10 h-10 stroke-1 mb-2 text-slate-300 animate-pulse" />
                      <span className="text-xs">Generating QR...</span>
                    </div>
                  )}
                  <div className="mt-2 text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                    Scan to Pay with any UPI App
                  </div>
                </div>

                {/* Label under QR */}
                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    <span>Linked Account: </span>
                    <span className="font-semibold text-slate-900">Indian Bank 1290</span>
                  </div>

                  {qrDataUrl && (
                    <button
                      type="button"
                      onClick={handleDownloadQR}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs border border-slate-200 transition-colors cursor-pointer"
                      title="Download QR to phone gallery"
                    >
                      <Download className="w-3 h-3 text-slate-500" />
                      <span>Save QR</span>
                    </button>
                  )}
                </div>
              </div>

              {/* UPI ID & GPay detail copy cards */}
              <div className="space-y-3">
                {/* UPI ID */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      UPI ID
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 tracking-tight font-mono break-all select-all block mt-0.5">
                      karan2301.m@okicici
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('karan2301.m@okicici', 'UPI ID', 'upi_id')}
                    className={`shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] min-w-[76px] focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:outline-none ${
                      copiedKey === 'upi_id'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                    title="Copy UPI ID"
                    aria-label="Copy UPI ID"
                  >
                    {copiedKey === 'upi_id' ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* GPay Number */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      GPay / Phone Number
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 tracking-tight font-mono select-all block mt-0.5">
                      8939145849
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('8939145849', 'GPay Number', 'gpay_number')}
                    className={`shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] min-w-[76px] focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:outline-none ${
                      copiedKey === 'gpay_number'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                    title="Copy GPay Number"
                    aria-label="Copy GPay Number"
                  >
                    {copiedKey === 'gpay_number' ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct UPI App intent trigger for smartphone visitors */}
              <div className="mt-4">
                <a
                  href={upiIntentUri}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-black text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs min-h-[44px] cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Tap to Pay with any UPI App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 sm:pt-5 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500 flex items-center justify-center gap-1.5 flex-wrap">
                <Info className="w-3.5 h-3.5 text-slate-400 inline" />
                <span>Compatible with Google Pay, PhonePe, Paytm, BHIM & bank apps</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
