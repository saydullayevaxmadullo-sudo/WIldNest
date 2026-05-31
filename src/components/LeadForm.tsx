import React, { useState, useEffect } from "react";
import { Language, translations } from "../types";
import { X, Send, CheckCircle2, AlertTriangle, Terminal, RefreshCw, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadFormProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
}

export default function LeadForm({
  currentLang,
  isOpen,
  onClose,
  preselectedPackage,
}: LeadFormProps) {
  const t = translations[currentLang];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    packageName: preselectedPackage || "Sokinlik Nest (Comfort)",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [responseDetails, setResponseDetails] = useState<any | null>(null);

  // Admin section: fetch list of incoming leads dynamically from Express
  const [adminLeads, setAdminLeads] = useState<any[]>([]);
  const [adminConfig, setAdminConfig] = useState<any>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Synchronize chosen package if it changes from parameters
  useEffect(() => {
    if (preselectedPackage) {
      setForm((prev) => ({ ...prev, packageName: preselectedPackage }));
    }
  }, [preselectedPackage]);

  const fetchLeads = async () => {
    try {
      const resp = await fetch("/api/leads");
      if (resp.ok) {
        const data = await resp.json();
        setAdminLeads(data.leads || []);
        setAdminConfig(data);
      }
    } catch (err) {
      console.error("Failed to fetch leads for operator dashboard:", err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.lastName) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitStatus("success");
        setResponseDetails(data);
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          packageName: preselectedPackage || "Sokinlik Nest (Comfort)",
        });
        // Refresh operator list
        fetchLeads();
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-forest/40 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose}></div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative bg-warm-cream dark:bg-forest border-2 border-warm-gold/20 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-forest/70 hover:bg-forest/10 dark:text-warm-cream/70 dark:hover:bg-warm-cream/10 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {submitStatus !== "success" ? (
              <>
                {/* Title */}
                <div className="text-left mb-6">
                  <h3 className="text-2xl font-serif font-bold text-forest dark:text-warm-cream">
                    {t.form.title}
                  </h3>
                  <p className="text-xs text-forest/70 dark:text-warm-cream/70 mt-1 leading-relaxed">
                    {t.form.subtitle}
                  </p>
                </div>

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-forest/70 dark:text-warm-cream/70 mb-1.5">
                      {t.form.firstName} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === "UZB" ? "Ism va familiyangizni kiriting" : currentLang === "RUS" ? "Введите имя и фамилию" : "Enter your full name"}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-forest/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold/50 text-forest font-medium dark:bg-forest/80 dark:border-leaf/50 dark:text-warm-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-forest/70 dark:text-warm-cream/70 mb-1.5">
                      {t.form.lastName} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === "UZB" ? "Masalan: Jizzax, Toshkent" : currentLang === "RUS" ? "Например: Ташкент, Джизак" : "e.g. Jizzakh, Tashkent"}
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-forest/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold/50 text-forest font-medium dark:bg-forest/80 dark:border-leaf/50 dark:text-warm-cream"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-forest/70 dark:text-warm-cream/70 mb-1.5">
                      {t.form.phone} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-forest/50 dark:text-warm-cream/50">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+998 (90) 389-33-89"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-forest/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold/50 text-forest font-semibold dark:bg-forest/80 dark:border-leaf/50 dark:text-warm-cream font-mono"
                      />
                    </div>
                  </div>




                  <button
                    id="submit-lead-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-forest hover:bg-forest/90 dark:bg-warm-gold dark:hover:bg-warm-gold/90 text-warm-cream dark:text-forest font-black uppercase text-xs tracking-widest rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? t.form.submitting : t.form.submit}
                  </button>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-xs leading-relaxed font-sans">
                      {t.form.errorText}
                    </div>
                  )}
                </form>
              </>
            ) : (
              /* Success Showcase Screen */
              <div className="text-center py-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-forest dark:text-warm-cream mb-2">
                  {t.form.successTitle}
                </h3>
                
                <p className="text-sm text-forest/70 dark:text-warm-cream/70 leading-relaxed font-sans max-w-md mb-8">
                  {t.form.successText}
                </p>

                {/* Submitting to telegram details info block */}
                <div className="w-full p-4 rounded-2xl bg-forest/5 dark:bg-leaf/40 border border-warm-gold/20 text-left text-xs mb-8">
                  <div className="flex items-center gap-1.5 font-bold text-forest dark:text-warm-cream uppercase tracking-wide mb-2 text-[10px]">
                    <Shield className="h-3.5 w-3.5 text-warm-gold" />
                    Telegram Dispatch Logging
                  </div>
                  <p className="font-medium text-forest/80 dark:text-warm-cream/80 mb-2">
                    Status: {responseDetails?.sentToTelegram ? (
                      <span className="text-emerald-500 font-bold">SENT SUCCESSFULLY ✅</span>
                    ) : (
                      <span className="text-amber-500 font-bold">SAVED LOCALLY ONLY ⚠️</span>
                    )}
                  </p>
                  {!responseDetails?.sentToTelegram && (
                    <p className="text-forest/60 dark:text-warm-cream/60 leading-relaxed leading-snug">
                      Note: To dispatch real push messages, configure <code className="bg-forest/10 dark:bg-black/30 px-1 py-0.5 rounded font-mono font-bold text-warm-gold">TELEGRAM_BOT_TOKEN</code> &amp; <code className="bg-forest/10 dark:bg-black/30 px-1 py-0.5 rounded font-mono font-bold text-warm-gold">TELEGRAM_CHAT_ID</code> inside secrets. We stored it safely in the operator lounge below!
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button
                    id="close-success-btn"
                    onClick={onClose}
                    className="flex-1 py-3 bg-forest dark:bg-warm-gold text-warm-cream dark:text-forest font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition cursor-pointer"
                  >
                    {t.form.close}
                  </button>
                  <a
                    href="https://t.me/wildnest_uz"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 border border-forest/20 text-forest dark:text-warm-cream dark:border-warm-cream/20 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-forest/5 flex items-center justify-center gap-1.5 transition"
                  >
                    {t.form.telegramDirect}
                  </a>
                </div>
              </div>
            )}

            {/* EXPANDABLE OPERATOR LEADS PANEL (Sandbox/Testing helper) */}
            <div className="mt-8 pt-6 border-t border-forest/10 dark:border-warm-cream/10 text-left">
              <button
                id="toggle-admin-btn"
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="w-full py-2.5 px-4 bg-forest/5 dark:bg-leaf/20 border border-warm-gold/10 hover:border-warm-gold/30 rounded-xl flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-forest/80 dark:text-warm-cream/80 transition cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Terminal className="h-4 w-4 text-warm-gold animate-pulse" />
                  Operator Lounge: Active Leads ({adminLeads.length})
                </span>
                <span>{showAdminPanel ? "Hide" : "Show"}</span>
              </button>

              <AnimatePresence>
                {showAdminPanel && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="max-h-56 overflow-y-auto space-y-3 pr-1">
                      <div className="p-3 bg-black/5 dark:bg-black/20 rounded-xl text-[10px] leading-relaxed font-sans text-forest/70 dark:text-warm-cream/70 flex justify-between items-center gap-2">
                        <span>Telegram Hook: {adminConfig?.envConfigured ? "Configured ✅" : "Not Configured ⚠️"}</span>
                        <button
                          onClick={fetchLeads}
                          className="p-1 hover:bg-forest/10 rounded-full text-warm-gold"
                          title="Refresh"
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {adminLeads.length === 0 ? (
                        <p className="text-[11px] text-center text-forest/50 dark:text-warm-cream/50 py-4 italic">
                          No booking leads captured yet. Submit standard booking to view log logs.
                        </p>
                      ) : (
                        adminLeads.map((lead) => (
                          <div
                            key={lead.id}
                            className="p-3.5 rounded-xl border border-warm-cream dark:border-leaf/20 bg-white/70 dark:bg-forest/60 text-xs flex flex-col gap-1 shadow-sm"
                          >
                            <div className="flex justify-between items-center text-[10px] font-bold text-forest/40 dark:text-warm-cream/40">
                              <span>ID: #{lead.id}</span>
                              <span>{new Date(lead.timestamp).toLocaleTimeString()}</span>
                            </div>
                            <p className="font-extrabold text-forest dark:text-warm-cream">
                              {lead.firstName} {lead.lastName}
                            </p>
                            <p className="font-mono text-warm-gold font-bold">
                              {lead.phone}
                            </p>
                            <p className="text-[10px] uppercase font-bold text-forest/60 dark:text-warm-cream/60 mt-1">
                              Tarif: <span className="text-forest dark:text-warm-cream font-extrabold">{lead.packageName}</span>
                            </p>
                            <p className="text-[9px] mt-1 p-1 bg-black/5 dark:bg-black/30 rounded font-mono truncate">
                              Status: {lead.sentToTelegram ? "✅ Dispatched to TG Bot" : `⚠️ saved locally (${lead.telegramError?.substring(0, 30)})`}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
