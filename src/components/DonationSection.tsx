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
  Download,
  UserCheck
} from 'lucide-react';
import QRCode from 'qrcode';
import { motion } from 'motion/react';

interface DonationSectionProps {
  onCopy: (text: string, label: string) => void;
}

export function DonationSection({ onCopy }: DonationSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [qrOption2Url, setQrOption2Url] = useState<string>('');
  const [qrOption3Url, setQrOption3Url] = useState<string>('');

  // Official standard UPI intent links
  const upiOption2Uri = 'upi://pay?pa=karan2301.m@okicici&pn=Karunakaran%20M&cu=INR&tn=Medical%20support%20for%20Nirmala%20D';
  const upiOption3Uri = 'upi://pay?pa=nirmalamanishangaran@oksbi&pn=Nirmala%20Mani&cu=INR&tn=Medical%20support%20for%20Nirmala%20Mani';

  useEffect(() => {
    // Generate QR for Option 2 (Karunakaran M)
    QRCode.toDataURL(
      upiOption2Uri,
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
          setQrOption2Url(url);
        }
      }
    );

    // Generate QR for Option 3 (Nirmala Mani - Google Pay) with high error correction
    QRCode.toDataURL(
      upiOption3Uri,
      {
        width: 360,
        margin: 1.5,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      },
      (err, url) => {
        if (!err && url) {
          setQrOption3Url(url);
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

  const handleDownloadQR = (url: string, filename: string) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
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
            Choose either direct Bank Transfer, UPI to coordinator Karunakaran M, or Direct Patient UPI to Nirmala Mani.
          </p>
        </div>

        {/* Note banner: All contributions go directly towards treatment */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="bg-emerald-50/95 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-3 text-emerald-950 text-xs sm:text-sm md:text-base font-medium shadow-xs text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              All contributions go directly towards Mrs. Nirmala’s medical treatment, valve replacement, and hospital deposits.
            </span>
          </div>
        </div>

        {/* 3 Options Grid - Responsive across all device form factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* Option 1 – Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                      Option 1
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
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
                Direct NEFT / IMPS / RTGS transfer from any Indian banking portal or branch.
              </p>

              {/* Bank Details Table */}
              <div className="space-y-3">
                {bankDetails.map((field) => {
                  const isCopied = copiedKey === field.key;
                  return (
                    <div
                      key={field.key}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                          {field.label}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 tracking-tight font-mono break-all select-all block mt-0.5">
                          {field.value}
                        </span>
                      </div>

                      {field.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(field.value, field.label, field.key)}
                          className={`shrink-0 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer min-h-[40px] min-w-[70px] ${
                            isCopied
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                          }`}
                          title={`Copy ${field.label}`}
                          aria-label={`Copy ${field.label}`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
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

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-600">
                <CreditCard className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Branch: Chennai Central</span>
              </span>
              <button
                onClick={() => handleCopy('Indian Bank\nAccount: 7311261290\nIFSC: IDIB000C022\nHolder: Karunakaran M', 'All Bank Details', 'all_bank')}
                className="text-sky-700 hover:text-sky-800 font-medium inline-flex items-center gap-1 cursor-pointer py-1"
              >
                <Copy className="w-3 h-3" />
                <span>Copy all</span>
              </button>
            </div>
          </motion.div>

          {/* Option 2 – Coordinator UPI / GPay (Karunakaran M) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Option 2
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
                      UPI / GPay (Karunakaran M)
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>

              {/* QR Code and Instructions */}
              <div className="flex flex-col items-center justify-center text-center mb-5">
                <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm inline-block max-w-full">
                  {qrOption2Url ? (
                    <img
                      src={qrOption2Url}
                      alt="UPI Payment QR Code for Karunakaran M"
                      className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg mx-auto"
                    />
                  ) : (
                    <div className="w-40 h-40 sm:w-44 sm:h-44 flex flex-col items-center justify-center bg-slate-50 rounded-lg text-slate-400 mx-auto">
                      <QrCode className="w-8 h-8 stroke-1 mb-2 text-slate-300 animate-pulse" />
                      <span className="text-xs">Generating QR...</span>
                    </div>
                  )}
                  <div className="mt-1.5 text-xs font-bold text-slate-800 tracking-tight">
                    Scan to Pay with any UPI App
                  </div>
                </div>

                {/* Label under QR */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium">
                    <span>Indian Bank 1290</span>
                  </div>

                  {qrOption2Url && (
                    <button
                      type="button"
                      onClick={() => handleDownloadQR(qrOption2Url, 'Karunakaran_UPI_QR.png')}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] border border-slate-200 transition-colors cursor-pointer"
                      title="Download QR"
                    >
                      <Download className="w-2.5 h-2.5 text-slate-500" />
                      <span>Save QR</span>
                    </button>
                  )}
                </div>
              </div>

              {/* UPI ID & GPay details */}
              <div className="space-y-2.5">
                {/* UPI ID */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      UPI ID
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight font-mono break-all select-all block mt-0.5">
                      karan2301.m@okicici
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('karan2301.m@okicici', 'UPI ID', 'upi_id')}
                    className={`shrink-0 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] ${
                      copiedKey === 'upi_id'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                    title="Copy UPI ID"
                  >
                    {copiedKey === 'upi_id' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* GPay Number */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      GPay Number
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight font-mono select-all block mt-0.5">
                      8939145849
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('8939145849', 'GPay Number', 'gpay_number')}
                    className={`shrink-0 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] ${
                      copiedKey === 'gpay_number'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                    title="Copy GPay Number"
                  >
                    {copiedKey === 'gpay_number' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct UPI App intent trigger */}
              <div className="mt-3.5">
                <a
                  href={upiOption2Uri}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 active:bg-black text-white py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors shadow-xs min-h-[42px] cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tap to Pay with UPI App</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-500">
                Coordinator Account: Karunakaran M
              </span>
            </div>
          </motion.div>

          {/* Option 3 – Direct Patient UPI (Mrs. Nirmala Mani) with uploaded QR styling */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-sky-200 shadow-md flex flex-col justify-between relative ring-2 ring-sky-100/50"
          >
            {/* Top patient highlight badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
              Direct Patient Account
            </div>

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100 pt-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                      Option 3
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
                      Patient Direct UPI
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>

              {/* Exact Google Pay Card Mockup matching user uploaded image */}
              <div className="flex flex-col items-center justify-center text-center mb-5">
                {/* Patient Header: Avatar 'N' + Nirmala Mani */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#4258bd] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    N
                  </div>
                  <span className="font-bold text-slate-900 text-base tracking-tight">
                    Nirmala Mani
                  </span>
                </div>

                {/* White rounded card with QR and center logo */}
                <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm inline-block max-w-full relative">
                  <div className="relative inline-block">
                    {qrOption3Url ? (
                      <img
                        src={qrOption3Url}
                        alt="Google Pay UPI QR Code for Nirmala Mani"
                        className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg mx-auto"
                      />
                    ) : (
                      <div className="w-40 h-40 sm:w-44 sm:h-44 flex flex-col items-center justify-center bg-slate-50 rounded-lg text-slate-400 mx-auto">
                        <QrCode className="w-8 h-8 stroke-1 mb-2 text-slate-300 animate-pulse" />
                        <span className="text-xs">Generating QR...</span>
                      </div>
                    )}

                    {/* Google Pay center pill badge matching uploaded image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center pointer-events-none">
                      <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.6 20.5H42V20H24v8h11.3C33.6 33.3 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.2 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z" fill="#4285F4"/>
                        <path d="M6.3 14.7l6.6 4.8C14.7 16.1 19 14 24 14c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.2 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" fill="#EA4335"/>
                        <path d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.2-5.1c-2 1.4-4.5 2.3-7.1 2.3-5.3 0-9.6-2.7-11.3-8l-6.6 5.1C9.6 39.5 16.3 44 24 44z" fill="#34A853"/>
                        <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.6-2.5 4.8-4.7 6.3l6.2 5.1C40.6 35.8 44 30.5 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#FBBC05"/>
                      </svg>
                    </div>
                  </div>

                  {/* Subtext on card matching image */}
                  <div className="mt-2 text-[11px] sm:text-xs font-semibold text-slate-700 tracking-tight select-all">
                    UPI ID: nirmalamanishangaran@oksbi
                  </div>
                </div>

                {/* Subtext under card matching uploaded image */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-xs text-slate-600 font-medium">
                    Scan to pay with any UPI app
                  </span>

                  {qrOption3Url && (
                    <button
                      type="button"
                      onClick={() => handleDownloadQR(qrOption3Url, 'Nirmala_Mani_SBI_UPI_QR.png')}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 text-[11px] border border-sky-200 transition-colors cursor-pointer"
                      title="Download Patient QR"
                    >
                      <Download className="w-2.5 h-2.5 text-sky-600" />
                      <span>Save QR</span>
                    </button>
                  )}
                </div>
              </div>

              {/* UPI ID & Bank detail */}
              <div className="space-y-2.5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:border-sky-200 transition-colors flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-sky-800 uppercase tracking-wider block">
                      Direct Patient UPI ID (SBI)
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight font-mono break-all select-all block mt-0.5">
                      nirmalamanishangaran@oksbi
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('nirmalamanishangaran@oksbi', 'Patient UPI ID', 'patient_upi_id')}
                    className={`shrink-0 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] ${
                      copiedKey === 'patient_upi_id'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                    title="Copy Patient UPI ID"
                  >
                    {copiedKey === 'patient_upi_id' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct UPI App intent trigger */}
              <div className="mt-3.5">
                <a
                  href={upiOption3Uri}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 text-white py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors shadow-xs min-h-[42px] cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-sky-200" />
                  <span>Tap to Pay Directly to Nirmala</span>
                  <ExternalLink className="w-3 h-3 text-sky-200" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-center">
              <span className="text-[11px] text-sky-800 font-medium flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                Direct Beneficiary Account: Nirmala Mani (SBI)
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
