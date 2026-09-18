import { useState } from 'react';
import { Heart, Share2, Copy, Check, MessageCircle, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface ShareSectionProps {
  onCopy: (text: string, label: string) => void;
}

export function ShareSection({ onCopy }: ShareSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showInstaModal, setShowInstaModal] = useState(false);

  const shareTitle = "Urgent Medical Support for Mrs. Nirmala D (Kauvery Hospital, Chennai)";
  const shareText = "Urgent Appeal: Mrs. Nirmala D (55) is advised life-saving Aortic Valve Replacement (Open Heart Surgery) at Kauvery Hospital, Chennai. Estimated cost: ₹6,04,000. Any contribution or share can help save her life. Please contribute & share:";
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://urgent-medical-support.org';

  const fullShareMessage = `${shareText}\n\nBank Transfer: Indian Bank, A/c: 7311261290, IFSC: IDIB000C022 (Karunakaran M)\nUPI ID: karan2301.m@okicici (8939145849)\n\nLink: ${currentUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopiedLink(true);
      onCopy(currentUrl, 'Campaign Link');
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        return;
      } catch (e) {
        // User cancelled or share failed, fallback to copy
      }
    }
    handleCopyLink();
  };

  const handleCopyFullPost = () => {
    navigator.clipboard.writeText(fullShareMessage).then(() => {
      onCopy(fullShareMessage, 'Story & Payment Details');
      setShowInstaModal(false);
    });
  };

  const shareChannels = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
      action: () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      color: 'bg-slate-50 text-slate-800 hover:bg-slate-100 border-slate-200',
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-pink-50 text-pink-700 hover:bg-pink-100 border-pink-200',
      action: () => {
        setShowInstaModal(true);
      },
    },
  ];

  return (
    <section id="share" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Soft red heart + prayer hands */}
        <div className="flex items-center justify-center gap-2 mb-3.5">
          <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-2xs">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </div>
          <span className="text-2xl" role="img" aria-label="prayer hands">🙏</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Please share this story and help us reach more people
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-7 sm:mb-9 leading-relaxed">
          Sharing takes only a few seconds, but it significantly expands our reach to compassionate donors, friends, and family circles across WhatsApp and social media.
        </p>

        {/* Social Share Buttons with 44px+ touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto mb-8"
        >
          {shareChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <button
                key={channel.name}
                type="button"
                onClick={channel.action}
                className={`inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs min-h-[44px] ${channel.color}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{channel.name}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={handleNativeShare}
            className={`inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs min-h-[44px] ${
              copiedLink
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-900 hover:bg-slate-800 active:bg-black text-white border-slate-900'
            }`}
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 shrink-0" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 shrink-0" />
                <span>Share Link</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Prepared share preview text snippet box */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-left max-w-2xl mx-auto shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
              Quick Share Message Preview
            </span>
            <button
              onClick={handleCopyFullPost}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800 cursor-pointer min-h-[36px] py-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy complete message</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono bg-white p-3 sm:p-3.5 rounded-lg border border-slate-100 select-all break-words">
            {shareText}
          </p>
        </div>

        {/* Instagram Share Modal */}
        {showInstaModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-xl border border-slate-100 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Share on Instagram Story or Bio</h3>
                  <p className="text-xs text-slate-500">Paste in your story with a Link Sticker</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                You can copy the appeal message and link below to paste onto your Instagram Story or profile bio!
              </p>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleCopyFullPost}
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Complete Story & Details</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowInstaModal(false)}
                  className="w-full text-center py-2.5 text-xs font-medium text-slate-500 hover:text-slate-700 cursor-pointer min-h-[40px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
